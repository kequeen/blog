import{_ as h,r as n,o,c as d,a as e,b as r,d as a,e as i}from"./app-d43038e2.js";const s={},c=i('<h1 id="关于http" tabindex="-1"><a class="header-anchor" href="#关于http" aria-hidden="true">#</a> 关于http</h1><p>主要谈一下当前http协议的一些问题，以及未来的http2,http3等</p><h2 id="http2" tabindex="-1"><a class="header-anchor" href="#http2" aria-hidden="true">#</a> HTTP2</h2><h3 id="对http的头部进行压缩" tabindex="-1"><a class="header-anchor" href="#对http的头部进行压缩" aria-hidden="true">#</a> 对HTTP的头部进行压缩</h3><p>就是同一个域名下，其实HTTP头部是重复的，可以第一次传输将map</p><h3 id="支持服务端推送" tabindex="-1"><a class="header-anchor" href="#支持服务端推送" aria-hidden="true">#</a> 支持服务端推送</h3><p>其实就是客户端原本要请求A、B、C的，需要发送三个请求。支持服务端推送之后，客户端请求A 之后，服务端可以直接给客户端推送A、B、C</p><h3 id="请求管线化" tabindex="-1"><a class="header-anchor" href="#请求管线化" aria-hidden="true">#</a> 请求管线化</h3><p>目前只有GET、HEAD等请求</p><h3 id="修复队头阻塞问题" tabindex="-1"><a class="header-anchor" href="#修复队头阻塞问题" aria-hidden="true">#</a> 修复队头阻塞问题</h3><h3 id="数据传输采用多路复用" tabindex="-1"><a class="header-anchor" href="#数据传输采用多路复用" aria-hidden="true">#</a> 数据传输采用多路复用</h3><p>多个请求合并在同一个tcp连接内。因为在http</p><h2 id="http3" tabindex="-1"><a class="header-anchor" href="#http3" aria-hidden="true">#</a> HTTP3</h2><p>其实最大的问题，就是TCP本身的冷启动的问题</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',15),p={href:"https://www.ruanyifeng.com/blog/2018/03/http2_server_push.html",target:"_blank",rel:"noopener noreferrer"},l={href:"https://halfrost.com/http2-header-compression/",target:"_blank",rel:"noopener noreferrer"},f={href:"https://zh.m.wikipedia.org/zh-hans/HTTP%E5%A4%B4%E5%AD%97%E6%AE%B5",target:"_blank",rel:"noopener noreferrer"},_={href:"https://www.rfc-editor.org/rfc/rfc7541",target:"_blank",rel:"noopener noreferrer"};function u(m,b){const t=n("ExternalLinkIcon");return o(),d("div",null,[c,e("ol",null,[e("li",null,[e("a",p,[r("https://www.ruanyifeng.com/blog/2018/03/http2_server_push.html"),a(t)])]),e("li",null,[e("a",l,[r("https://halfrost.com/http2-header-compression/"),a(t)])]),e("li",null,[e("a",f,[r("https://zh.m.wikipedia.org/zh-hans/HTTP头字段"),a(t)])]),e("li",null,[e("a",_,[r("https://www.rfc-editor.org/rfc/rfc7541"),a(t)])])])])}const T=h(s,[["render",u],["__file","http.html.vue"]]);export{T as default};
