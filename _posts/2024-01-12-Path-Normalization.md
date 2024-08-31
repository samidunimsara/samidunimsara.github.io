---
title: Understanding and Exploiting Path Normalization Vulnerabilities
description: bugbounty,hacking
author: samidunimsara
date: 2024-01-12 11:33:00 +0800
categories: [hackingweb, web]
tags: [web,bugbounty]

---


## Understanding and Exploiting Path Normalization Vulnerabilities

Path normalization vulnerabilities arise from inconsistencies between how a reverse proxy and a web application server (WAS) process and interpret URL paths. These vulnerabilities often occur due to misconfigurations or differences in path handling mechanisms. This blog explores the mechanics behind path normalization issues and provides practical tips for identifying and exploiting them.

---

### What is Path Normalization?

Path normalization is the process of converting URL paths into a standardized format. This process often involves resolving relative paths like `..` (which represents the parent directory) into absolute paths. When an application or a server encounters a path traversal attack, it may incorrectly normalize the path, leading to unauthorized access or other security issues.

A classic example of path normalization vulnerability involves an attacker manipulating the URL path to access resources that should be restricted. For instance, if an attacker sends a path with `..;/`, a server might normalize it to `../`, potentially bypassing access controls.

---

### Case Study: Exploiting Path Normalization Vulnerabilities

#### 1. Initial Exploration and Reconnaissance

Start by traversing directories and observing responses. For example, if navigating back three directories results in a `400 Bad Request`, it indicates that the traversal is likely too deep. Conversely, a `404 Not Found` might suggest that you’ve hit a valid path but it might not be accessible.

```plaintext
Example URL traversal:
https://example.com/de/..;/..;/..;/..;/
```

Here, you might receive:
- `400 Bad Request` (indicating excessive traversal)
- `404 Not Found` (indicating a potential valid path that does not exist)

#### 2. URL Encoding and Responses

Some servers handle URL encoding differently. For example, Apache’s default configuration has `AllowEncodedSlashes` turned off, which means encoded slashes (`%2f`) might not be processed correctly. On the other hand, if a server does not decode these encodings before processing, it might expose sensitive paths.

```plaintext
/admin/path/test.html         403 Forbidden
/admin/path/for/../test.html  200 OK
```

#### 3. Practical Exploits

Here are some examples where path normalization can be exploited:

- **NGINX REST API Access**

  An attacker might exploit path normalization to gain unauthorized access to NGINX’s REST API endpoints.

  ```plaintext
  https://example.com/path/..;/api/9/nginx
  ```

- **Tomcat Path Traversal**

  Apache Tomcat might be vulnerable if it handles paths differently than the reverse proxy. For instance, `../examples/servlets/SessionExample` could expose example servlets that should not be accessible.

  ```plaintext
  https://example.com/..;/examples/servlets/servlet/SessionExample
  ```

#### 4. Advanced Techniques

Sometimes, path normalization issues are more subtle. For instance, mismatches between Cloudflare’s CDN caching and the backend server’s path routing might expose sensitive data:

```plaintext
https://example.com/share/%2F..%2F/api/auth/session
```

The CDN might cache the request before URL decoding, exposing sensitive backend data.

---

### Reconnaissance Tips

#### 1. Using Chrome DevTools

Start your reconnaissance with Chrome DevTools by focusing on Fetch/XHR and Docs. This approach minimizes noise from static files and helps pinpoint valuable endpoints.

#### 2. Running Brute Force Tools

Use tools like `ffuf` to brute force potential paths. Common payloads include:

```plaintext
/experience/..;/
/experience/../
/experience/..%2f
/experience/%2e%2e%2f
```

Analyze responses for anomalies. For example, a `403 Forbidden` response might indicate restricted access, while a `404 Not Found` could hint at a deeper directory.

#### 3. Leveraging Path Encodings

Try various encodings to bypass filters. Some encodings to consider include:

```plaintext
..%2f
..%252f
%2e%2e%2f
%252e%252e%252f
```

Analyze how the server processes these encodings and look for inconsistencies.

---


For more insights on path normalization and related vulnerabilities, check out these resources:
- [SecJuice: Breaking Parser Logic](https://www.secjuice.com/breaking-parser-logic-gain-access-to-nginx-plus-api-read-write-upstreams/)
- [BlackHat Presentation by Orange Tsai](https://i.blackhat.com/us-18/Wed-August-8/us-18-Orange-Tsai-Breaking-Parser-Logic-Take-Your-Path-Normalization-Off-And-Pop-0days-Out-2.pdf)
