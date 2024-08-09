---
title: Recon 101 Sinhala
description: hacking sinhala,recon sinhala,bugbounty,samidunimsara
author: samidunimsara
date: 2024-04-24 11:33:00 +0800
categories: [recon, hacking]
tags: [hacking]

---

> The English-speaking world already has tons of books, talks, guides, and
info about hacking

##### Recon For Ex 

# Recon

google,bing,yandex,duckducgo,yahoo dorking
github docking
waymore,katana
jslinkfinder
burphistory

read 

Web Application Defender's Cookbook

- Reconnaissance is a set of processes and techniques used to covertly discover and collect information about a target system. In the reconnaissance stage, attackers act like detectives, gathering information to truly understand their target. If you think Recon is only the process of the running a set of tools blindly while watcing the flashing clolors with your arms crossed, then you need to rethink the process of recon. Or you are going to know a different kind of recon in this section.
- Prior to running tools and gathering data our recon comprises of Reading product documenatation, checking their youtube channels, third party product walkthroughs and tutorials. webinars etc. We will be briefly describing the mentioned approaches in our Recon process.
- Reading Product documentation: These are one of the accurate and simplified resources you can get your hands on. They are built or documented for the users/customers of this application and the’ve simplified it to the level that anyone can understand it. The perks of reading this documentation that you get to understand the application from a user’s perspective and all of the features get revealed to you, their use and dependence. Moreover the logic of the application gets clear to you. We spent a few days reading the documentation and using the application as simple users and meanwhile if any test case came to our mind we just noted it down.
- Browsing their youtube channels : In this case we visited the official channel of larksuite which is under the name of Lark on youtube, there was again a treasure of information. Step by step tutorials explaining difficult features, in other words it is visual docementation of the product. We went through almost all of the Videos thoroughly and it sedimented the understanding of product and we were able to understand it better.

- Reading about product from third party resources : One of the prime benefit of reading from third party resources the product information and one’s user knowledge get diversified and sometimes you can know the issues or errors from those resources which can be directly abused and you can have easy bugs.
- Product helpdesk and community support: People have always listed their typical queries and concerns on these platforms and the companies have answered them. We read the queries as well so that we can grasp some typical issues faced by maximum users and look into them if they can be abused.

- When discovering subdomains/domains/assets owned by a company, use the Google Analytics ID to expand your attack surface. The ID is in the HTML code
    1. http://Site-Overview.com
    

    
    ```bash
    curl https://www.notion.so/ | grep 'ga("create"'
    curl -s http://example.com | grep -Eo 'UA-[0-9]+-[0-9]+|G-[A-Z0-9]+'
    curl -s http://example.com | grep -oP 'ga\("create",\s*"\K(UA-[0-9]+-[0-9]+|G-[A-Z0-9]+)'
    ```
    

---

- **Google_IP_Dork**
    
    ```bash
    Using google dorks to limit the search to only IPv4 addresses. Search examples:
    
    "© 2022 Uber Technologies Inc."
    Facebook internal assets report
    "elon.musk@twitter.com"
    
    (site:*.*.256.* |site:*.*.255.* |site:*.*.254.* |site:*.*.253.* |site:*.*.252.* |site:*.*.251.* |site:*.*.250.* |site:*.*.249.* |site:*.*.248.* |site:*.*.247.* |site:*.*.246.* |site:*.*.245.* |site:*.*.244.* |site:*.*.243.* |site:*.*.242.* |site:*.*.241.* |site:*.*.240.* |site:*.*.239.* |site:*.*.238.* |site:*.*.237.* |site:*.*.236.* |site:*.*.235.* |site:*.*.234.* |site:*.*.233.* |site:*.*.232.* |site:*.*.231.* |site:*.*.230.* |site:*.*.229.* |site:*.*.228.* |site:*.*.227.* |site:*.*.226.* |site:*.*.225.* |site:*.*.224.* |site:*.*.223.* |site:*.*.222.* |site:*.*.221.* |site:*.*.220.* |site:*.*.219.* |site:*.*.218.* |site:*.*.217.* |site:*.*.216.* |site:*.*.215.* |site:*.*.214.* |site:*.*.213.* |site:*.*.212.* |site:*.*.211.* |site:*.*.210.* |site:*.*.209.* |site:*.*.208.* |site:*.*.207.* |site:*.*.206.* |site:*.*.205.* |site:*.*.204.* |site:*.*.203.* |site:*.*.202.* |site:*.*.201.* |site:*.*.200.* |site:*.*.199.* |site:*.*.198.* |site:*.*.197.* |site:*.*.196.* |site:*.*.195.* |site:*.*.194.* |site:*.*.193.* |site:*.*.192.* |site:*.*.191.* |site:*.*.190.* |site:*.*.189.* |site:*.*.188.* |site:*.*.187.* |site:*.*.186.* |site:*.*.185.* |site:*.*.184.* |site:*.*.183.* |site:*.*.182.* |site:*.*.181.* |site:*.*.180.* |site:*.*.179.* |site:*.*.178.* |site:*.*.177.* |site:*.*.176.* |site:*.*.175.* |site:*.*.174.* |site:*.*.173.* |site:*.*.172.* |site:*.*.171.* |site:*.*.170.* |site:*.*.169.* |site:*.*.168.* |site:*.*.167.* |site:*.*.166.* |site:*.*.165.* |site:*.*.164.* |site:*.*.163.* |site:*.*.162.* |site:*.*.161.* |site:*.*.160.* |site:*.*.159.* |site:*.*.158.* |site:*.*.157.* |site:*.*.156.* |site:*.*.155.* |site:*.*.154.* |site:*.*.153.* |site:*.*.152.* |site:*.*.151.* |site:*.*.150.* |site:*.*.149.* |site:*.*.148.* |site:*.*.147.* |site:*.*.146.* |site:*.*.145.* |site:*.*.144.* |site:*.*.143.* |site:*.*.142.* |site:*.*.141.* |site:*.*.140.* |site:*.*.139.* |site:*.*.138.* |site:*.*.137.* |site:*.*.136.* |site:*.*.135.* |site:*.*.134.* |site:*.*.133.* |site:*.*.132.* |site:*.*.131.* |site:*.*.130.* |site:*.*.129.* |site:*.*.128.* |site:*.*.127.* |site:*.*.126.* |site:*.*.125.* |site:*.*.124.* |site:*.*.123.* |site:*.*.122.* |site:*.*.121.* |site:*.*.120.* |site:*.*.119.* |site:*.*.118.* |site:*.*.117.* |site:*.*.116.* |site:*.*.115.* |site:*.*.114.* |site:*.*.113.* |site:*.*.112.* |site:*.*.111.* |site:*.*.110.* |site:*.*.109.* |site:*.*.108.* |site:*.*.107.* |site:*.*.106.* |site:*.*.105.* |site:*.*.104.* |site:*.*.103.* |site:*.*.102.* |site:*.*.101.* |site:*.*.100.* |site:*.*.99.* |site:*.*.98.* |site:*.*.97.* |site:*.*.96.* |site:*.*.95.* |site:*.*.94.* |site:*.*.93.* |site:*.*.92.* |site:*.*.91.* |site:*.*.90.* |site:*.*.89.* |site:*.*.88.* |site:*.*.87.* |site:*.*.86.* |site:*.*.85.* |site:*.*.84.* |site:*.*.83.* |site:*.*.82.* |site:*.*.81.* |site:*.*.80.* |site:*.*.79.* |site:*.*.78.* |site:*.*.77.* |site:*.*.76.* |site:*.*.75.* |site:*.*.74.* |site:*.*.73.* |site:*.*.72.* |site:*.*.71.* |site:*.*.70.* |site:*.*.69.* |site:*.*.68.* |site:*.*.67.* |site:*.*.66.* |site:*.*.65.* |site:*.*.64.* |site:*.*.63.* |site:*.*.62.* |site:*.*.61.* |site:*.*.60.* |site:*.*.59.* |site:*.*.58.* |site:*.*.57.* |site:*.*.56.* |site:*.*.55.* |site:*.*.54.* |site:*.*.53.* |site:*.*.52.* |site:*.*.51.* |site:*.*.50.* |site:*.*.49.* |site:*.*.48.* |site:*.*.47.* |site:*.*.46.* |site:*.*.45.* |site:*.*.44.* |site:*.*.43.* |site:*.*.42.* |site:*.*.41.* |site:*.*.40.* |site:*.*.39.* |site:*.*.38.* |site:*.*.37.* |site:*.*.36.* |site:*.*.35.* |site:*.*.34.* |site:*.*.33.* |site:*.*.32.* |site:*.*.31.* |site:*.*.30.* |site:*.*.29.* |site:*.*.28.* |site:*.*.27.* |site:*.*.26.* |site:*.*.25.* |site:*.*.24.* |site:*.*.23.* |site:*.*.22.* |site:*.*.21.* |site:*.*.20.* |site:*.*.19.* |site:*.*.18.* |site:*.*.17.* |site:*.*.16.* |site:*.*.15.* |site:*.*.14.* |site:*.*.13.* |site:*.*.12.* |site:*.*.11.* |site:*.*.10.* |site:*.*.9.* |site:*.*.8.* |site:*.*.7.* |site:*.*.6.* |site:*.*.5.* |site:*.*.4.* |site:*.*.3.* |site:*.*.2.* |site:*.*.1.* |site:*.*.0.* )
    
    https://github.com/SeifElsallamy/gip
    
    https://samidunimsara.github.io/ip_dork.html
    ```
    
- **Shodan_Dork  * Find more  remember mention about book**
    
    ```bash
    ssl.cert.subject.CN:"*.brightspeed.com" http.title:"index of/"
    ssl.cert.subject.CN:"*.brightspeed.com" http.title:"gitlab"
    ssl.cert.subject.CN:"*.brightspeed.com" http.title:"index of/"
    
    ssl.cert.subject.CN:"*.brightspeed.com" "230 login successful" port:"21"
    
    ssl.cert.subject.CN:"*.brightspeed.com"+200 http.title:"Admin"
                                                http.title:"singup"
    
    http.title:"phpinfo()" ssl:"*.target.com""
    
    asn:AS14556
    org:"Amazon Technologies Inc."
    net:212.120.40.224/27
    asn:AS7183 http.component:"PHP"
    hostname:safaricom.com
    
    Can search via heder undestand specipy tec heder and search by them
    
    "X-Jenkins" "Set-Cookie: JSESSIONID" http.title:"Dashboard"
    
    Whenever you're testing shodan, try to filter as much results.
    Let's say 
    
    http://ssl.cert.subject.cn:Starbucks.* 
    
    It means it'll find more regional subdomains.
    
    Next, you want to remove 401 response.
    
    http://ssl.cert.subject.cn:Starbucks.* -401
    
    In response, I don't want those pages which have these title.
    
    http://ssl.cert.subject.cn:Starbucks -title:" "
    
    Use minus symbol, Learn to filter out more and you'll see results which you're interested in.
    
    https://beta.shodan.io/search/examples
    
    https://beta.shodan.io/search/filters
    
    ```
    

---

- JS_TIPS
    

    

---

- dork
    
    You can use Google dorks to help find the full names of the files. Here are some Google dorks that might help you find more information about the files starting with "/PEGASU":
    
    1. **To search for indexed directories containing files with the prefix "PEGASU":**
        
        ```
        intitle:"index of" "PEGASU"
        ```
        
    2. **To search for specific file extensions related to "PEGASU":**
        
        ```
        intitle:"index of" "PEGASU" ext:20
        intitle:"index of" "PEGASU" ext:202
        ```
        
    3. **To search for file listings or directories with "PEGASU" in the name:**
        
        ```
        "PEGASU" filetype:log
        "PEGASU" filetype:txt
        ```
        
    4. **To search for "PEGASU" in URLs or page content:**
        
        ```
        inurl:"PEGASU"
        allinurl:"PEGASU"
        ```
        
    5. **To search for information related to "PEGASU" on web servers:**
        
        ```
        site:example.com "PEGASU"
        ```
        
    

- Google Dork new one
    
    find what year company created google or use wayback then select years to like this ths can lead to fnd new shit
    

    

```bash
curl -s "https://crt.sh/?O=Apple%20Inc.&output=json" | jq -r ".[].common_name" | tr A-Z a-z | unfurl format %r.%t | sort -u | tee apple.cert.txt
find root domains

echo AS714 | tlsx -san -cn -silent -resp-only

asn look up https://en.ipip.net/

find TLDs

https://crt.sh/

https://tools.whoisxmlapi.com/login

site:crunchbase.com "acquired by yahoo"

I was going back to WeBack and I was testing all the links that have parameters one by one.

sub
aws.sh
oneforall
bbot
reconftw
triket

Certificate Search

By using the following command, root domains of Apple company can be enumerated:

curl -s "https://crt.sh/?O=Apple%20Inc.&output=json" | jq -r ".[].common_name" | tr A-Z a-z | unfurl format %r.%t | sort -u | tee apple.cert.txt

Find Origin IP.
1. subdomain enumeration.
2. Save All A records in IPs.txt.
3. Remove CDN IP.
4. Fuzz Host Header on IPs.txt with list of all subdomains.
for ip in $(cat ip.txt);do echo $ip &&  ffuf -w ./subdomains.txt -u http://$ip -H "Host: FUZZ" -s -mc 200; done

Perform Recursive bruteforcing:

FUZZ.host → dev.host → FUZZ.dev.host

amass enum -passive -d example.com -o results.txt

when ffuf vhost

traget is a ip and host is all the sub you found

get cidr | prips cidr > ip.txt

fet all sub > sub.txt

then bruteforse ip:subdomain with ffuf

for i in $(cat ip.txt);do ffuf -w sub.txt -u https://$i  -H "Host: FUZZ" -of csv -o $t.csv; done

https://github.com/shriyanss/vhost-master

site:*<*yahoo.*>*
site:atlassian>*
site:*<atlassian.*>*
site:*<*yahoo.*>*
site:*yahoo.*

BING

• Remember the IP list we got from ASN?
• Use bing to find valid hosts on the server
• Dork: “ip:127.0.0.1”

ftp brute https://github.com/Cerbrutus-BruteForcer/cerbrutus

ask youself 

we asked each other: if he's managed to uncover many vulnerabilities, why can't we? he is a human so as i

If you give a hacker a new toy, the first thing he’ll do is take it apart to figure out how it works. — Jamie Zawinski

1'XOR(SELECT CASE WHEN(1234=1234) THEN SLEEP(7) ELSE 0 END)XOR'Z

```

**Understand. The. Organization**

Q to think

what they do
what they provide
Where is it located ?

---

Gether all urls

google,bing,yandex,duckducgo,yahoo dorking
github docking
waymore,katana
jslinkfinder
burphistory

---

### **Find More Domains**

**Check the location of company** (country)
then find wordlist related to that country language
use dns brute fours

eg: If company located at Netherlander you can use dutch language wordlist to **BruteForce.**   

This can lead to find new domains that no one found before.

run subdomain scanning on that result to eg: `subdindrt -dL ducthdns.txt`

---

**Copyright Recon** eg: intext: 2022 @ reconbyte -recon.com / change years to +1995

---

**Finding Domains Using** "Subject Alternative Name"

Click on the certificate.
Navigate to the "Subject Alternative Name" (SAN) field.

- You can see list of domains that share the same SSL certificate.
    

    

---

Subdomain tool cmd

```bash
bbot -t evilcorp.com -f subdomain-enum
jq -r 'select(.type=="DNS_NAME") | .data' /root/.bbot/scans/wasted_crystal/output.ndjson
jq -r 'select(.type=="DNS_NAME") | .data' /root/.bbot/scans/embarrassed_robin/output.ndjson

# vhost

for i in $(cat ip.txt);do ffuf -w sub.txt -u https://$i  -H "Host: FUZZ" -of json -o $t.json; done

amass enum -passive -norecursive  -df pilotflyingj.com.sub.aall -o more.sub

cat more.sub | awk '{print $6}' | grep pilotflyingj.com > amass1

#oneforall

python3 oneforall.py --target principal.com	 run --fmt json 

# OneForAll
python3 oneforall.py --target $domains --fmt json run
cat $domain.tld.json | jq '.[].subdomain' | sed 's/\"//g' | sort -u > oneforall.sub

## ffuf

ffuf -H "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:127.0) Gecko/20100101 Firefox/127.0" -recursion -recursion-depth 5 -c -v -D -e  -o ffuf.json 

find new subdomain

comm -13 old.sub new.sub > new_only.sub
alias reconftw='./root/reconftw/reconftw.sh'

```

---

**ffuf** valid subdomain name on dirs :

 `awk -F'.traget.com' '{print $1}' sub.txt > subdomains_dirs.txt`

---

**Find Urls**

```bash

urlscan.io
google,bind,yandex,duckduckgo dork site:*
github
waymore
waybackurls
katana

ffuf
find path using gap,jslinkfinder
```

**IP_VALIDATION**

```bash
https://www.sslshopper.com
```

**PortScan**

```bash
naabu -p-
```

[https://asnlookup.com/](https://asnlookup.com/)

Use notional put every step track your process

---

Turn ASN numbers into CIDR**;**`whois -h [whois.radb.net](http://whois.radb.net/) -- "-i origin $asn" | grep -Eo "([0-9.]+){4}/[0-9]+" | sort -u >> $recondir/cidr`

---

```bash
1. Get company's ASN numbers - amass intel -org DoD
2. Turn ASN numbers into CIDR - whois -h whois.radb.net -- "-i origin $asn" | grep -Eo "([0-9.]+){4}/[0-9]+" | sort -u >> $recondir/cidr
3. Get TLDS from ASN - amass intel -asn $asn
4. Get TLDS from whois data - amass intel -whois -d TLD (facebook.com)
5. Get TLDS from CIDR - amass intel -cidr xxxxxx/23
```

---

CIDR to hostnames`prips 144.160.32.0/19 | hakrevdns  -d | httpx -title -status-code -follow-redirects`

more https://github.com/NagliNagli/Shockwave-OSS

---

---



---

---

If you found nginx server make sure to test for off-by-slash-vun



---

---

```bash
recon

censys.io
shodan.io
beta.shodan.io

```

---

---

- **302 Redirect Buypass**
    
    
    more:
    
    [https://www.bugbountyhunter.com/vulnerability/?type=open_redirect](https://www.bugbountyhunter.com/vulnerability/?type=open_redirect)
    
    [https://repository.root-me.org/Exploitation - Web/EN - Exploiting Improper Redirection in PHP Web Applications.pdf](https://repository.root-me.org/Exploitation%20-%20Web/EN%20-%20Exploiting%20Improper%20Redirection%20in%20PHP%20Web%20Applications.pdf)
    
    [https://www.fastfwd.com/302-redirect-hijacking/](https://www.fastfwd.com/302-redirect-hijacking/)
    

    
- **404 Vun nginx server**
    

    
- Give a list of urls as input and receive unique urls as output (alpha)
    
    ```python
    from collections import Counter
    import sys
    
    c = sys.stdin.read()
    c = c.splitlines()
    
    def diffPerce(a, b):
        a="/".join(a.split("/")[3:])
        b="/".join(b.split("/")[3:])
        a = a.split("?")[0]
        b = b.split("?")[0]
        n = 0
        r1=""
        r2=""
        for i in range(min([a.count("/"), b.count("/")])): 
            if a.split("/")[i] != b.split("/")[i]:
                n = n + 1
                r1 = a.split("/")[i]
                r2 = b.split("/")[i]
                
        #True = keep, False = Remove from list.
        #Case 1: If there is more than one path that isn't exact then not similar.
        if n > 1:
            return True
    
        #Case 2: If path length exceeds 29 characters then it is similar if not then not similar.
        elif n == 1:
    
            if (len(r1) > 29) and (len(r2) > 29):
                return False
            else:
                return True
            
        #Case 3: If exact path then similar and count is equal then similar else false.
        elif n == 0:
            if a.count("/") == b.count("/"):
                return False
            else:
                return True
    
    def lxl(clist, level):
        c=clist
        level = 7
        for i in range(level, len(c)-1):
            url=c[i]
            if url == "":
                continue
            for layer in range(1,level):
                url2 = c[i-level+layer]
                r=diffPerce(url, url2)
                if not r:
                    c[i-level+layer] = ""
        c = list(filter(None, c))
        return c
    """
    def stack(n, c, level):
        for i in range(n):
            c=lxl(c, level)
        return c
    """
    c=lxl(c, 5)
    c=lxl(c, 1000)
    c=lxl(c, len(c)-1)
    
    bl = ["\\","undefined",".webm","text/javascript","!","==",";","..","(", ")","*",":",".pdf",".xml",".ttf",".js",".css",".jpg",".jpeg",".icon",".png",".gif",".webp",".bmp",".tif",".tiff",".ico",".svg",".woff2",".woff"]
    
    for u in range(len(c)):
        if ("&" in "/".join(c[u].split("/")[3:])) and ("?" not in "/".join(c[u].split("/")[3:])):
            c[u] = ""
        if len("/".join(c[u].split("/")[3:])) < 4:
            if "," in "/".join(c[u].split("/")[3:]):
                c[u] = ""
        for s in bl:
            if s in "/".join(c[u].split("/")[3:]):
                c[u] = ""
                break
    c = list(filter(None, c))
    
    def freq(c): # un used anymore
        x=[]
        y=[]
        done=[]
        for u in c:
            u="/".join(u.split("/")[3:])
            u = u.split("?")[0]
            s=u.split("/")[-1]
            if s == "":
                if len(u.split("/")) > 1:
                    s = u.split("/")[-2]
            x.append(s)
    
        for t in list(Counter(x).most_common()):
            if t[1] > 4:
                if "index" not in t[0]:
                    y.append(t[0])
        
        for i in range(len(c)):
            u=c[i]
            u="/".join(u.split("/")[3:])
            u = u.split("?")[0]
            s=u.split("/")[-1]
            if s == "":
                if len(u.split("/")) > 1:
                    s = u.split("/")[-2]
            for b in y:
                if b == s:
                    if b not in done:
                        done.append(b)
                    if b in done:
                        c[i]=""
        c = list(filter(None, c))
        return c
        
    #c=freq(c)
    
    def freq2(c):
        newDirs = []
        let = 4
        for u in c:
            u="/".join(u.split("/")[3:]) # remove domain and keep path
            u = u.split("?")[0] # remove params
            d = u.split("/") # split path
            d = list(filter(None, d)) # remove white spaces (double paths and last path)
            for p in range(len(d)): 
                newDir = d[p] + "*" + str(p) + "*" + str(len(d)) # build mapper, separator = *, 
                newDirs.append(newDir)# First value = path, second = dir order, third = total number of dirs 
    
        mapper = list(Counter(newDirs).most_common()) # change counter to list e.g., (path map, frequancy)
        for m in mapper:
            lett = let
            if m[1] > let:# if frequancy is more than four, (let more than four exist).
                struct = m[0].split("*") # split the mapped path
                for uu in range(len(c)):
                    u = c[uu]
                    u="/".join(u.split("/")[3:])
                    u = u.split("?")[0]
                    d = u.split("/")
                    d = list(filter(None, d))
                    for p in range(len(d)):
                        newDir = d[p] + "*" + str(p) + "*" + str(len(d))
                        newDir = newDir.split("*")
                        if struct == newDir:
                            if lett > 0:
                                lett = lett -1
                            else:
                                c[uu] = ""
        c = list(filter(None, c))
        return c
                                
                            
                
                
        
    c=freq2(c)
    
    print("\n".join(c))
    
    ```
    

use timetracker

Set Goals: like this month i hunt 35 hours and score 5000$ Bounty
5 hourse per day

Tip #1: Skip Content Management Systems (CMS), Blogs, & News

find api keys google extentions

[https://github.com/SeifElsallamy/REX?tab=readme-ov-file](https://github.com/SeifElsallamy/REX?tab=readme-ov-file)

## Learn where fo ffuf and haw to ffuf and what to think ffuf param using wordlists

The target’s attack surface management will be key here as you can’t patch what you don’t know about. Hence our attention will be drawn to older technologies and low-hanging fruit first.

Google has a built in Open Redirect you can chain:
[https://google](https://google/)[.]com/amp/s/poc.rhynorater.com

use curl with -i
look for 404 subdomains
try to read js if there no regisror
tryto add valid@ to test haw forget pwd work admin@compay.tld
ffuf 404 sub with  dir1m assetnote

API_KEYS

```bash
# censys

API ID: 35955471-0554-4623-b444-681ea676fb4e 
Secret: 2RJv1Jw4iam1d45RToPF8PhCxg5igrZD

# zoomeye

8D699BdC-0B36-e7f33-9779-b5c427f4f09

# hunterio

20ccc36991729aede64e64afbf919152b38301b0

# securitytrails

dve0M54aJZ4GD2mJ_0omRREXta-vwe1x

# shodan

1yQuLrwoQCpnNxxqyJMjhssynfjWtHWe

# teligram

6371902433:AAEvv_PNuvMhUH3oJIYPLyUOqVl0IZTsZ5I

1250514270

https://api.telegram.org/bot6371902433:AAEvv_PNuvMhUH3oJIYPLyUOqVl0IZTsZ5I/getUpdates
```

reconscript

```bash
#!/bin/bash

if [ -z "$1" ]; then
    echo "Usage: $0 <domain_list_file>"
    exit 1
fi

domain_list="$1"
API_KEY="EB83RYIpWu8RvbwitN5ge9nxvrZcGndR4sTf3hoU"
API_URL="https://tls.bufferover.run/dns?q=."

IFS=' ' read -ra domains <<< "$(<"$domain_list")"

for domain in "${domains[@]}"; do
    mkdir -p "$domain"
    cd "$domain" || exit 1

    query_url="${API_URL}${domain}"
    
    result=$(curl -s "$query_url" -H "x-api-key:$API_KEY" | jq -r '.Results[] | split(",")[4]' | sort -u)

    output_file="${domain}_result.sub"
    echo "$result" > "$output_file"

    echo "Result for $domain saved to $output_file"
    
    cd ..
done

python3 oneforall.py --target "${domains[*]}" --fmt json run
cat "${domains[*]}.tld.json" | jq '.[].subdomain' | sed 's/\"//g' | sort -u > oneforall.sub

reconftw -d "$domain_list" -a

mv ~/reconftw/Recon/"$domain_list"/subdomains/subdomains.txt reconftw.sub
mv ~/reconftw/Recon/"$domain_list"/subdomains/reconftw.sub .

sort -u *.sub | httprobe -p http:81 -p https:8443 -p https:8000 -c 10 -t 33000 > httprobe.http
nuclei -l httprobe.http -dr -rl 3 -bs 4 -c 2 -jsc 10 -mhe 60 -timeout 28 -retries 4 -H "X-HackerOne-Research:echo" -o nuclei.txt # / -je output.json

mkdir -p urls
katana -u $domain -d 5 - jc -o katana.recon
waymore -l $domain -MODE B -o waymore.txt

favicon-hash

curl https://favicon-hash.kmsec.uk/api/?url=https://www.zooplus.de/favicon.ico | jq

add thsi to ; /bin/pipx bbot -t evilcorp.com -f subdomain-enum
python3 oneforall.py --target business.tomtom.com --fmt json run

cat sub.txt | httprobe --prefer-https  -p https:443 -p https:8443 -p https:8080 https:8172 https:8081 > sub.httprobe

nuclei -l sub.httpx -dr -rl 100 -bs 4 -c 20 -mhe 40 -jsc 100 -timeout 15 -retries 4 -s critical,high  -o crit_high_nuclei.txt

nuclei -l sub.httpx -dr -rl 100 -bs 4 -c 20 -mhe 40 -jsc 100 -timeout 15 -retries 4 -s critical -o critical_nuclei.txt
nuclei -l sub.httpx -dr -rl 100 -bs 4 -c 20 -mhe 40 -jsc 100 -timeout 15 -retries 4 -s high -o high_nuclei.txt
nuclei -l sub.httpx -dr -rl 100 -bs 4 -c 20 -mhe 40 -jsc 100 -timeout 15 -retries 4 -s medium -o medium_nuclei.txt
echo cat sub.txt | httprobe -p https:443 -p https:8443 -p https:8080 https:8172 https:8081 > sub.httprobe
nuclei -l sub.httprobe -o normal_nuclei.txt
nuclei -l sub.httprobe -dr -rl 3 -bs 4 -c 2 -jsc 10 -mhe 60 -timeout 28 -retries 4 -H "X-HackerOne-Research:echo" -o script_test_nuclei.txt

nuclei -l sub.httpx -dr -rl 100 -bs 4 -c 20 -mhe 40 -jsc 100 -timeout 15 -retries 4 -s critical -o critical_nuclei.txt
nuclei -l dmn.main -dr -rl 100 -bs 4 -c 20 -mhe 40 -jsc 100 -timeout 15 -retries 4 -s high -o high_nuclei.txt
nuclei -l dmn.main -dr -rl 100 -bs 4 -c 20 -mhe 40 -jsc 100 -timeout 15 -retries 4 -s medium -o medium_nuclei.txt

nuclei -l f.httpx -dr -retries 4 -s critical -o critical_nuclei.txt
nuclei -l f.httpx -dr -retries 4 -s high -o high_nuclei.txt
nuclei -l f.httpx -dr -retries 4 -s medium -o medium_nuclei.txt

```

awscet.sh

```bash
#!/bin/bash

API_KEY="EB83RYIpWu8RvbwitN5ge9nxvrZcGndR4sTf3hoU"
API_URL="https://tls.bufferover.run/dns?q=."

read -p "Enter domain name or list of domains (separated by spaces): " input_domains

IFS=' ' read -ra domains <<< "$input_domains"

for domain in "${domains[@]}"; do
  
    query_url="${API_URL}${domain}"
    
    result=$(curl "$query_url" -H "x-api-key:$API_KEY" | jq -r '.Results[] | split(",")[4]' | sort -u)

    output_file="${domain}_result.txt"
    echo "$result" > "$output_file"

    echo "Result for $domain saved to $output_file"
done

```

tool idia

```bash
nuclei -u $  -dr -rl 3 -bs 4 -c 2 -jsc 10 -timeout 28 -retries 4 -H "X-HackerOne-Research:echo" -o nuclei.txt

alias reconftw='./root/reconftw/reconftw.sh'

#!/bin/bash

if [ -z "$1" ]; then
    echo "Usage: $0 <domain_list_file>"
    exit 1
fi

domain="$1"
reconftw -d "$domain" -a
sort -u "$domain" | httprobe -p http:81 -p https:8443 -p https:8000 -c 10 -t 33000 > httprobe.http
nuclei -l httprobe.http -dr -rl 3 -bs 4 -c 2 -jsc 10 -timeout 28 -retries 4 -H "X-HackerOne-Research:echo" -o nuclei.txt

```
###### samidunimsara(Odayex)
