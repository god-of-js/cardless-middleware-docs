## Cardless comes with 14 layers of security for HTTP headers. Some of the security layers we have implemented are:

## Content Security Policy
 A computer security standard introduced to prevent cross-site scripting (XSS), clickjacking and other code injection attacks resulting from execution of malicious content in the trusted web page context.

## Expect-CT
 This header allows sites to opt in to reporting and/or enforcement of Certificate Transparency requirements, which prevents the use of misissued certificates for that site from going unnoticed

## Cross-Domain
A cross-domain solution (CDS) is a means of information assurance that provides the ability to manually or automatically access or transfer information between two or more differing security domains.

## DNS-Prefetch-Control HTTP response header
 This controls DNS prefetching, a feature by which our API controls how  browsers proactively perform domain name resolution on both links that the user may choose to follow as well as URLs for items referenced by the document, including images, CSS, JavaScript, and so forth.

## The HTTP Feature-Policy header
 This feauture provides a mechanism to allow and deny the use of browser features in its own frame, simply put, it ensures that only features allowed by our API is accessed over the internet.

## Frame guard
 Frameguard mitigates clickjacking attacks by setting the X-Frame-Options header.

 ## The Hide Powered-By
   This module removes the X-Powered-By header to make it slightly harder for attackers to see what potentially-vulnerable technology powers our API.

## The HTTP Public Key Pinning
This module helps you set the Public-Key-Pins header to prevent person-in-the-middle attacks

## HSTS
 This module sets the Strict-Transport-Security header to keep your users on HTTPS.

## IE No Open
This module sets the X-Download-Options to prevent Internet Explorer from executing downloads in your site’s context.

## No Cache
The nocache module feature aims to disable browser caching by setting several headers.

## Don’t Sniff Mimetype
 The Don’t Sniff Mimetype module, noSniff, helps prevent browsers from trying to guess (“sniff”) the MIME type, which can have security implications. It does this by setting the X-Content-Type-Options header to nosniff
<br>
## Referer HTTP header
 The Referer HTTP header is typically set by web browsers to tell our server where it’s coming from. In short: the Referrer Policy module can control the behavior of the Referer header by setting the Referrer-Policy header. Using this header our server determines where requests are coming from, cross checks with our whitelisted clients and their different privilege levels to avoid security breach mostly in form of DoS (Denial of Service) attacks.
<br>
## XSS Filter
 The xssFilter module sets the X-XSS-Protection header to prevent reflected cross site scripting or users running javascript commands on our server, this ensures that no one can  log our actions, impersonate us or our clients, steal authentication cookies, and much more.

