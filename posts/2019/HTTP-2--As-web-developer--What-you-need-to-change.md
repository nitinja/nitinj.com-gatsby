---
title: "HTTP/2: As web developer, What you need to change"
description: >-
  As of March 2020, HTTP/2 is used by 43.8% of all the websites. This numbers
  will only grow. This is short summary of my recent exploration…
date: "2020-03-09T14:08:16.349Z"
categories: []
keywords: []
slug: /@nitinj/http-2-as-web-developer-what-you-need-to-change-bc21011f782f
---

### As of March 2020, HTTP/2 is used by 43.8% of all the websites. This numbers will only grow. This is short summary of my recent exploration of subject.

### **A Quick Overview of HTTP/2**

- HTTP/2 is a new Protocol that is replacing HTTP/1.1 thats currently de-facto standard of web.
- Main motivation behind it is Performance.
- Its backward compatible. Clients and browsers can use HTTP/1.1 as usual if they don’t support HTTP/2.
- With HTTP/2, SSL is recommended for performance reasons, but not compulsory.

### **What improvements HTTP/2 brings?**

- **Multiplexing:**

![HTTP/1.1 request vs HTTP/2 requests](img\1__aesfBgoLNA__SFi6vZB2IdQ.png)
HTTP/1.1 request vs HTTP/2 requests

Http/2 can fetch multiple files (usually HTML, JS CSS files etc) simultaneously from server. It uses same TCP connection for multiple files, hence multiplexing. Only one TCP connection is necessary.  
In comparison, Http/1.1 allows 4–8 max connections to server (per domain) at same time, restricting number of files you can fetch. One request has to wait for previous request to finish.

- Uses **Binary encoding** for request/response as compared to http/1.1 which uses text encoding. That means **more accurate handling of Line endings, whitespace encoding** etc. Binary encoding is also efficient to parse and use.
- **Stream Prioritization**  
  Each request stream can be prioritized. So browser can download a critical css file on priority while JS files may load with lower priority. (I haven’t seen example of this in wild, but will update this point when the more details are available).
- **Stream dependencies**: Dependencies between streams can also be specified. So we can say that one js file can be dependent on another one.
- **HTTP header compression**  
  Http/2 supports header compression. That means less data on wire.
- **Server Initiated Push**  
  Unlike Http/1.1, Http/2 server can start pushing files to client on its own even before client requests those. This reduced latency and wait for html-parsing-and-asset-request.

### **How to prepare for HTTP/2?**

**Stop bundling assets:**  
No need to bundle css/JS files since http/2 supports multiplexing. There is almost no overhead in making many web requests. It may also mean that we don’t have to deploy entire bundle when only couple of files are updated.

**Stop inlining JS/CSS/Images/SVG:**  
Fetch those as separate files. You might get advantage of browser caching with separate files.

**Use lazy loading:** for JS/css files. This is more efficient and reduces initial load time.

**Stop creating image Sprites**:  
This in now unnecessary due to multiplexing. This also means simpler workflow and build script.

**Stop domain sharding**:  
No need to spread your files across multiple domains, since we can fetch everything now from same domain.

**Start Using HTTPS**:  
Its recommended standard with HTTP/2. You get more secure website/app by default.

But As always,

- Make sure your audience is using latest browsers(HTTP/2 is now supported in nearly all browsers, except our usual suspect, IE < v10)
- HTTP/2 is enabled on your server.

See you on HTTP2!
