# 为什么要用Go
其实核心就是在已经有C/C++，JAVA，Python，php等诸多各种编程语言的情况下，我们为什么还需要 Go，Go 语言解决了什么痛点呢？
阅读go官网的[这篇文档](https://go.dev/solutions/google/)中的几个典型案例,以及结合我们实际使用经验，可以得出以下答案： 

1. 易于并发
其它语言支持并发都是要引入单独的库进行支持，而go语言只需要
```go
go func(){
}
```
就能启动一个协程，用户多线程

2. 易于阅读与维护
不需要关注太多的技术细节在并发，能更多集中精力在业务逻辑上

3. 部署简单


## 关于其他
我挺喜欢[少是指数的多](https://commandcenter.blogspot.com/2012/06/less-is-exponentially-more.html)的设计理念的  


## 参考文档
1. <https://go.dev/solutions/google/>
2. <https://paul.pub/cpp-concurrency>
3. <https://draveness.me/golang/>
4. <https://go.dev/doc/faq#history>
5. <http://www.yinwang.org/blog-cn/2017/07/06/master-pl>
6. <https://go.dev/talks/2012/splash.article>
7. <https://go.dev/doc/faq#history>