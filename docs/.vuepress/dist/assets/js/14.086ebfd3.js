(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{193:function(e,t,r){"use strict";r.r(t);var a=r(0),s=Object(a.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{id:"cardless-comes-with-14-layers-of-security-for-http-headers-some-of-the-security-layers-we-have-implemented-are"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cardless-comes-with-14-layers-of-security-for-http-headers-some-of-the-security-layers-we-have-implemented-are","aria-hidden":"true"}},[e._v("#")]),e._v(" Cardless comes with 14 layers of security for HTTP headers. Some of the security layers we have implemented are:")]),e._v(" "),r("h2",{attrs:{id:"content-security-policy"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#content-security-policy","aria-hidden":"true"}},[e._v("#")]),e._v(" Content Security Policy")]),e._v(" "),r("p",[e._v("A computer security standard introduced to prevent cross-site scripting (XSS), clickjacking and other code injection attacks resulting from execution of malicious content in the trusted web page context.")]),e._v(" "),r("h2",{attrs:{id:"expect-ct"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#expect-ct","aria-hidden":"true"}},[e._v("#")]),e._v(" Expect-CT")]),e._v(" "),r("p",[e._v("This header allows sites to opt in to reporting and/or enforcement of Certificate Transparency requirements, which prevents the use of misissued certificates for that site from going unnoticed")]),e._v(" "),r("h2",{attrs:{id:"cross-domain"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cross-domain","aria-hidden":"true"}},[e._v("#")]),e._v(" Cross-Domain")]),e._v(" "),r("p",[e._v("A cross-domain solution (CDS) is a means of information assurance that provides the ability to manually or automatically access or transfer information between two or more differing security domains.")]),e._v(" "),r("h2",{attrs:{id:"dns-prefetch-control-http-response-header"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dns-prefetch-control-http-response-header","aria-hidden":"true"}},[e._v("#")]),e._v(" DNS-Prefetch-Control HTTP response header")]),e._v(" "),r("p",[e._v("This controls DNS prefetching, a feature by which our API controls how  browsers proactively perform domain name resolution on both links that the user may choose to follow as well as URLs for items referenced by the document, including images, CSS, JavaScript, and so forth.")]),e._v(" "),r("h2",{attrs:{id:"the-http-feature-policy-header"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#the-http-feature-policy-header","aria-hidden":"true"}},[e._v("#")]),e._v(" The HTTP Feature-Policy header")]),e._v(" "),r("p",[e._v("This feauture provides a mechanism to allow and deny the use of browser features in its own frame, simply put, it ensures that only features allowed by our API is accessed over the internet.")]),e._v(" "),r("h2",{attrs:{id:"frame-guard"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#frame-guard","aria-hidden":"true"}},[e._v("#")]),e._v(" Frame guard")]),e._v(" "),r("p",[e._v("Frameguard mitigates clickjacking attacks by setting the X-Frame-Options header.")]),e._v(" "),r("h2",{attrs:{id:"the-hide-powered-by"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#the-hide-powered-by","aria-hidden":"true"}},[e._v("#")]),e._v(" The Hide Powered-By")]),e._v(" "),r("p",[e._v("This module removes the X-Powered-By header to make it slightly harder for attackers to see what potentially-vulnerable technology powers our API.")]),e._v(" "),r("h2",{attrs:{id:"the-http-public-key-pinning"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#the-http-public-key-pinning","aria-hidden":"true"}},[e._v("#")]),e._v(" The HTTP Public Key Pinning")]),e._v(" "),r("p",[e._v("This module helps you set the Public-Key-Pins header to prevent person-in-the-middle attacks")]),e._v(" "),r("h2",{attrs:{id:"hsts"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hsts","aria-hidden":"true"}},[e._v("#")]),e._v(" HSTS")]),e._v(" "),r("p",[e._v("This module sets the Strict-Transport-Security header to keep your users on HTTPS.")]),e._v(" "),r("h2",{attrs:{id:"ie-no-open"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ie-no-open","aria-hidden":"true"}},[e._v("#")]),e._v(" IE No Open")]),e._v(" "),r("p",[e._v("This module sets the X-Download-Options to prevent Internet Explorer from executing downloads in your site’s context.")]),e._v(" "),r("h2",{attrs:{id:"no-cache"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#no-cache","aria-hidden":"true"}},[e._v("#")]),e._v(" No Cache")]),e._v(" "),r("p",[e._v("The nocache module feature aims to disable browser caching by setting several headers.")]),e._v(" "),r("h2",{attrs:{id:"don’t-sniff-mimetype"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#don’t-sniff-mimetype","aria-hidden":"true"}},[e._v("#")]),e._v(" Don’t Sniff Mimetype")]),e._v(" "),r("p",[e._v("The Don’t Sniff Mimetype module, noSniff, helps prevent browsers from trying to guess (“sniff”) the MIME type, which can have security implications. It does this by setting the X-Content-Type-Options header to nosniff\n"),r("br")]),e._v(" "),r("h2",{attrs:{id:"referer-http-header"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#referer-http-header","aria-hidden":"true"}},[e._v("#")]),e._v(" Referer HTTP header")]),e._v(" "),r("p",[e._v("The Referer HTTP header is typically set by web browsers to tell our server where it’s coming from. In short: the Referrer Policy module can control the behavior of the Referer header by setting the Referrer-Policy header. Using this header our server determines where requests are coming from, cross checks with our whitelisted clients and their different privilege levels to avoid security breach mostly in form of DoS (Denial of Service) attacks.\n"),r("br")]),e._v(" "),r("h2",{attrs:{id:"xss-filter"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#xss-filter","aria-hidden":"true"}},[e._v("#")]),e._v(" XSS Filter")]),e._v(" "),r("p",[e._v("The xssFilter module sets the X-XSS-Protection header to prevent reflected cross site scripting or users running javascript commands on our server, this ensures that no one can  log our actions, impersonate us or our clients, steal authentication cookies, and much more.")])])},[],!1,null,null,null);t.default=s.exports}}]);