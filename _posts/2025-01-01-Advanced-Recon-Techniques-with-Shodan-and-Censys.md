# Advanced Recon Techniques with Shodan and Censys

When it comes to hacking recon, tools like Shodan and Censys are goldmines for uncovering exposed hosts, misconfigurations, and interesting endpoints. This guide dives into powerful queries you can use to extract actionable intelligence during your reconnaissance phase.

---

## Hunting for Forgotten Hosts via Expired SSL/TLS Certificates

Expired SSL/TLS certificates often reveal forgotten or overlooked hosts still exposed to the internet.

### **Shodan Query**
```sh
org:"target org" ssl.cert.expired:true
```
Example:
```sh
org:"target org" ssl.cert.expired:true
```
This searches for expired SSL certificates belonging to the target organization.

### **Censys Query**
```sh
autonomous_system.organization:"target org" AND services.tls.certificate.parsed.validity_period.not_after:<YYYY-MM-DD>
```
Example:
```sh
autonomous_system.organization:"target org" AND services.tls.certificate.parsed.validity_period.not_after:2024-11-17
```
Find certificates that expired before a specific date.

---

## Searching for SSL/TLS Certificates

SSL/TLS certificates can provide valuable information about subdomains and services.

### **Shodan Query**
```sh
ssl.cert.subject.CN:"*.target.com"
```

### **Censys Query**
```sh
services.tls.certificate.names:"*.target.com"
```
These queries identify hosts using certificates tied to the target domain.

---

## Targeting HTTP Response Codes

Identifying servers by HTTP response codes can help narrow down your search for live targets.

### **Shodan Query**
```sh
http.status:200 org:"target org"
```

### **Censys Query**
```sh
services.http.response.status_code:200 AND autonomous_system.organization:"target org"
```
Find servers returning `200 OK` responses.

---

## Scanning for Exposed Index Pages and Repositories

Index pages and repositories often contain sensitive information or misconfigurations.

### **Shodan Query**
```sh
ssl.cert.subject.CN:"*.target.com" http.title:"index of/"
ssl.cert.subject.CN:"*.target.com" http.title:"gitlab"
```
Look for open directories and GitLab instances associated with the target domain.

---

## Identifying FTP Servers

FTP servers often expose sensitive data if improperly secured.

### **Shodan Query**
```sh
ssl.cert.subject.CN:"*.target.com" "230 login successful" port:21
```
Search for FTP servers with successful login banners.

---

## Admin Panels and Authentication Pages

Authentication endpoints and admin panels are common targets during recon.

### **Shodan Query**
```sh
ssl.cert.subject.CN:"*.target.com" http.title:"Admin"
http.title:"Signup"
```
Search for admin and signup pages hosted by the target.

### **Censys Query**
```sh
autonomous_system.organization:"target org" AND services.http.response.html_title:{"Login", "Register", "Sign in"}
```
This isolates common authentication-related endpoints.

---

## Finding PHP Info Pages

Exposed `phpinfo()` pages can leak sensitive configuration details.

### **Shodan Query**
```sh
http.title:"phpinfo()" ssl:"*.target.com"
```
Search for servers exposing PHP configuration details.

---

## Locating Non-Standard HTTP Ports

Non-standard HTTP ports often host development or admin interfaces.

### **Shodan Query**
```sh
org:"target org" http.status:200,404 -port:80 -port:443 -port:8080 -port:8443
```

### **Censys Query**
```sh
autonomous_system.organization:"target org" AND services:(service_name:HTTP AND NOT port:{80, 443, 8080, 8443})
```
Identify servers running on unusual HTTP ports.

---

## Filtering by Headers

Headers can reveal underlying technologies or platforms.

### **Shodan Query**
```sh
"X-Jenkins" "Set-Cookie: JSESSIONID" http.title:"Dashboard"
```
This example identifies Jenkins dashboards with active sessions.

---

## ASN and Network-Based Recon

Query by ASN or IP ranges to identify target-owned infrastructure.

### **Shodan Query**
```sh
asn:AS12345
org:"target org"
net:203.0.113.0/24
```

### **Censys Query**
```sh
autonomous_system.asn:12345 AND services.http.response.status_code:200
```
Focus on infrastructure tied to a specific ASN or network block.

---

## Filtering Results for Precision

Filtering results can help avoid noise and focus on actionable data.

### Example: Remove 401 Responses
```sh
ssl.cert.subject.cn:target.com -401
```
Exclude 401 Unauthorized responses from the results.

### Example: Exclude Unwanted Titles
```sh
ssl.cert.subject.cn:target.com -title:"Access Denied"
```
Filter out pages with irrelevant titles.

---

## Leveraging Favicons

Favicons are often unique to applications and can be used for precise targeting.

### **Shodan Query**
```sh
http.favicon.hash:<favicon_hash>
```

### **Censys Query**
```sh
services.http.response.favicons.hashes:<favicon_hash>
```
Match servers using a specific favicon hash.

---

## Bonus Tips for Efficient Recon

- **Subdomain Enumeration with SSL:**
  ```sh
  ssl.cert.subject.cn:*.target.com
  ```
  This finds regional subdomains tied to the target.

- **Use Filters for Noise Reduction:**
  Combine filters like `-401` or exclude irrelevant titles to improve result quality.

- **Explore Examples and Filters:**
  Familiarize yourself with advanced filters to refine your search. [Shodan Examples](https://beta.shodan.io/search/examples) and [Shodan Filters](https://beta.shodan.io/search/filters) are great resources.

---

## Conclusion

By mastering these advanced Shodan and Censys queries, you can streamline your recon efforts and uncover valuable information about your targets. Combine these with other tools and techniques for a comprehensive approach to hacking recon.

