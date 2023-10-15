import{_ as n,r as o,o as i,c as h,a as e,b as a,d as t,e as s}from"./app-d43038e2.js";const d={},c=e("h1",{id:"go语言faq",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#go语言faq","aria-hidden":"true"},"#"),a(" go语言FAQ")],-1),_=e("h2",{id:"_1、协程的本质上是用户态线程",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1、协程的本质上是用户态线程","aria-hidden":"true"},"#"),a(" 1、协程的本质上是用户态线程")],-1),l=e("br",null,null,-1),p={href:"https://zh.wikipedia.org/wiki/%E7%BA%BF%E7%A8%8B",target:"_blank",rel:"noopener noreferrer"},f=e("h2",{id:"_2、什么是真正的易于并发",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2、什么是真正的易于并发","aria-hidden":"true"},"#"),a(" 2、什么是真正的易于并发")],-1),g={href:"https://www.liaoxuefeng.com/wiki/1252599548343744/1306581130018849",target:"_blank",rel:"noopener noreferrer"},u=e("h2",{id:"_3、关于编程范式",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_3、关于编程范式","aria-hidden":"true"},"#"),a(" 3、关于编程范式")],-1),x=e("p",null,[a("一些编程范式，不仅仅是针对 go 语言，很多语言都是共通的"),e("br"),a(" 控制反转和依赖注入，这个概念最早接触是在学习 spring 框架的时候，其实在各个成熟的框架之中，这个已经是一种通用的设计方式了。 以及修饰器方式，在当初用 spring 框架做开发的时候使用很广泛，到处都是通过注解这种方式进行注入，虽然注解本身只是语法糖。")],-1),b=e("h2",{id:"_4、关于性能优化",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_4、关于性能优化","aria-hidden":"true"},"#"),a(" 4、关于性能优化")],-1),k={href:"https://bitfieldconsulting.com/golang/slower",target:"_blank",rel:"noopener noreferrer"},m=e("br",null,null,-1),w=e("br",null,null,-1),v=s('<h2 id="_5、关于垃圾回收" tabindex="-1"><a class="header-anchor" href="#_5、关于垃圾回收" aria-hidden="true">#</a> 5、关于垃圾回收</h2><p>垃圾回收目前主要分为引用计数法和根节点可达法。</p><h2 id="_6、关于内存分配" tabindex="-1"><a class="header-anchor" href="#_6、关于内存分配" aria-hidden="true">#</a> 6、关于内存分配</h2><p>核心问题其实是关于哪些内存分配在堆上，哪些内存分配在栈上</p><h2 id="_7、关于测试" tabindex="-1"><a class="header-anchor" href="#_7、关于测试" aria-hidden="true">#</a> 7、关于测试</h2><p>原生支持测试，采用go test命令就可以。而在php等语言中，需要引入单独的单元测试包</p><h2 id="_8、go的context特性" tabindex="-1"><a class="header-anchor" href="#_8、go的context特性" aria-hidden="true">#</a> 8、go的context特性</h2><p>我觉得这是一个比较优秀的设计，一些比较耗费资源的请求处理，请求方可能都已经退出了，但处理方其实并没有优雅的退出方案，还是会消耗掉资源。通过 context 这种方式，可以将上游的取消传递给下游，实现优雅的退出</p><h2 id="参考文档" tabindex="-1"><a class="header-anchor" href="#参考文档" aria-hidden="true">#</a> 参考文档</h2>',9),B={href:"https://go.dev/doc/effective_go#sharing",target:"_blank",rel:"noopener noreferrer"};function E(N,V){const r=o("ExternalLinkIcon");return i(),h("div",null,[c,_,e("p",null,[a("虽然linux本身已经让进程创建的成本很低了，但实际上进程的创建的开销对于操作系统而言还是太大。"),l,a(" 为此，又有了线程"),e("a",p,[a("https://zh.wikipedia.org/wiki/线程"),t(r)]),a("，线程是操作系统向其分配处理器的最小单元。同一进程下的多线程本身享有进程中的全部系统资源，但每个线程本身，还是有自己的调用栈，寄存器")]),f,e("p",null,[a("在php中写多进程程序，我们需要自己去进行fork和exit，以及在父进程中进行子进程的管理 而在 java 中，我们也需要考虑线程的各种情况，"),e("a",g,[a("https://www.liaoxuefeng.com/wiki/1252599548343744/1306581130018849"),t(r)]),a("，比如在不同的场景下去进行线程池的创建 而 go 的话，确实在这方面简化了很多，我们能够不去关心那么多的底层细节，可以更专注自己的业务逻辑")]),u,x,b,e("p",null,[e("a",k,[a("https://bitfieldconsulting.com/golang/slower"),t(r)]),a(" 关于这篇文章里提到的一些观点很是赞同："),m,a(" 1、语言本身的瓶颈很多时候不是真正的瓶颈，真正的瓶颈更多时候是设计层面上的瓶颈"),w,a(" 2、关于注释，我们应该考虑在代码层面确实无法表达清楚的情况下才使用注释，更多时候，应该代码本身就是最好的注释 不仅仅是机器的性能才是性能，开发同学的开发效率也是性能，清晰的代码能提高开发的效能")]),v,e("p",null,[a("1、"),e("a",B,[a("https://go.dev/doc/effective_go#sharing"),t(r)])])])}const q=n(d,[["render",E],["__file","compare.html.vue"]]);export{q as default};
