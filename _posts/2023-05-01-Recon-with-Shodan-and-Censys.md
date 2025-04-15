# Recon with Shodan and Censys


```md
# Recon with Shodan and Censys

When it comes to hacking reconnaissance, platforms like Shodan and Censys offer unparalleled insight into exposed hosts, misconfigurations, and hidden endpoints. This guide covers powerful queries and introduces extra techniques to extract actionable intelligence across your target's digital footprint.

---

## 1. Hunting for Forgotten Hosts with Expired SSL/TLS Certificates

Expired certificates can be a sign of neglected or legacy systems. Targeting them could reveal forgotten hosts that remain accessible despite outdated security measures.

### Shodan Query
```sh
org:"target org" ssl.cert.expired:true
```
*Tip:* Replace `"target org"` with your organization of interest. This query exposes hosts with expired SSL certificates.

### Censys Query
```sh
autonomous_system.organization:"target org" AND services.tls.certificate.parsed.validity_period.not_after:<YYYY-MM-DD>
```
*Tip:* Substitute `<YYYY-MM-DD>` with your desired cutoff date to identify certificates expired before that day.

---

## 2. Mapping Domain Infrastructure via SSL/TLS Certificates

SSL/TLS certificates can reveal subdomains and services, making them crucial for building an asset inventory.

### Shodan Query
```sh
ssl.cert.subject.CN:"*.target.com"
```
### Censys Query
```sh
services.tls.certificate.names:"*.target.com"
```
*Tip:* Leverage these queries to map an organization’s domain architecture and identify potential shadow IT.

---

## 3. Identifying Live Services through HTTP Response Codes

Narrow down your target list by filtering for active responses.

### Shodan Query
```sh
http.status:200 org:"target org"
```
### Censys Query
```sh
services.http.response.status_code:200 AND autonomous_system.organization:"target org"
```
*Tip:* Modify response codes (e.g., 404, 403) to diagnose unusual behavior or misconfigurations in web services.

---

## 4. Exposed Index Pages and Repositories

Index pages or development repositories can provide critical insights or even reveal sensitive data.

### Shodan Query Examples
```sh
ssl.cert.subject.CN:"*.target.com" http.title:"index of/"
ssl.cert.subject.CN:"*.target.com" http.title:"gitlab"
```
*Tip:* Look for directory listings and repository tools (like GitLab) that could expose internal code or configuration files.

---

## 5. Discovering Unsecured FTP Servers

FTP servers with weak access controls can be a goldmine for sensitive files.

### Shodan Query
```sh
ssl.cert.subject.CN:"*.target.com" "230 login successful" port:21
```
*Tip:* Identify FTP services that display a "230 login successful" banner to pinpoint servers with potential anonymous access.

---

## 6. Locating Admin Panels and Authentication Interfaces

High-value targets such as admin panels and login pages are key to further exploits.

### Shodan Query Examples
```sh
ssl.cert.subject.CN:"*.target.com" http.title:"Admin"
http.title:"Signup"
```
*Tip:* Experiment with keywords like "Dashboard," "Control Panel," or "Login" to uncover different endpoints.

### Censys Query
```sh
autonomous_system.organization:"target org" AND services.http.response.html_title:{"Login", "Register", "Sign in"}
```
*Tip:* Adjust the list of authentication titles to capture diverse login interfaces in your recon.

---

## 7. Detecting Exposed PHP Info Pages

`phpinfo()` pages can inadvertently expose configuration details critical for further exploitation.

### Shodan Query
```sh
http.title:"phpinfo()" ssl:"*.target.com"
```
*Tip:* Use these queries to search for misconfigured PHP applications that leak environment and version details.

---

## 8. Discovering Services on Non-Standard HTTP Ports

Services running on unexpected ports can be indicative of staging environments, admin interfaces, or shadow applications.

### Shodan Query
```sh
org:"target org" http.status:200,404 -port:80 -port:443 -port:8080 -port:8443
```
### Censys Query
```sh
autonomous_system.organization:"target org" AND services:(service_name:HTTP AND NOT port:{80, 443, 8080, 8443})
```
*Tip:* These queries help isolate targets on unusual ports, often overlooked in conventional scans.

---

## 9. Leveraging HTTP Headers for Technology Fingerprinting

HTTP headers can expose details about underlying frameworks or platforms.

### Shodan Query
```sh
"X-Jenkins" "Set-Cookie: JSESSIONID" http.title:"Dashboard"
```
*Tip:* Identify services based on unique header signatures like `X-Jenkins` to pinpoint CI/CD interfaces or specialized dashboards.

---

## 10. ASN and Network Block Targeting

Focus your recon on a known network block or ASN to uncover all associated assets.

### Shodan Query
```sh
asn:AS12345 org:"target org" net:203.0.113.0/24
```
### Censys Query
```sh
autonomous_system.asn:12345 AND services.http.response.status_code:200
```
*Tip:* This approach consolidates your search within specific infrastructures, enhancing precision and reducing noise.

---

## 11. Precision Filtering to Refine Results

Reduce false positives by excluding noise from your queries.

### Excluding Unauthorized Responses
```sh
ssl.cert.subject.cn:target.com -401
```
### Filtering Out Irrelevant Titles
```sh
ssl.cert.subject.cn:target.com -title:"Access Denied"
```
*Tip:* Combine exclusion filters to trim down your dataset to high-value targets.

---

## 12. Leveraging Favicons for Unique Application Identification

Favicons provide a unique digital fingerprint and can be used to identify specific applications even across disparate endpoints.

### Shodan Query
```sh
http.favicon.hash:<favicon_hash>
```
### Censys Query
```sh
services.http.response.favicons.hashes:<favicon_hash>
```
*Tip:* Replace `<favicon_hash>` with the known hash value to match servers running the same application.

---

## 13. Additional Techniques and Recon Strategies

### DNS Recon and Subdomain Enumeration
- **Technique:** Use DNS queries to gather subdomain information.
- **Example Query (Shodan):**
  ```sh
  ssl.cert.subject.cn:*.target.com
  ```


## 14. Bonus Recon Tips

- **Subdomain Enumeration via SSL:**  
  ```sh
  ssl.cert.subject.cn:*.target.com
  ```
  Efficiently enumerate subdomains based on certificate data.

- **Noise Reduction with Combined Filters:**  
  Append exclusion filters (like `-401` or `-title:"Error"`) to streamline your search results.

---
*Happy hunting, and stay sharp!*
```
