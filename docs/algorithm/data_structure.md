# 关于常用的数据结构
数据结构与算法，这两个词经常会放在一起。因为依赖于合适的数据结构，很多问题的解决其实是事半功倍的。

## 数组
不同语言中数组会有一些差别，比如是否定长，以及数据类型上是否一致。  
一般而言，我们对数组的期待是存储同一类型的数据，虽然像php这类弱类型语言，其实也只能在编程规范上去进行约束  
并且数组的话，强类型语言，我们一般认为其存储地址是连续的。这个读的效率会比较高，而写的效率则不一样  

## 链表
一般是与数组做对比，对比于数组而言，其主要的优势在于修改的成本低，并且可以动态扩展。

## 队列
先进先出的数据结构，常用于BFS等场景。  
在php中，可以用数组去实现。  
在java中，有单独的[List类]<https://www.cainiaojc.com/java/java-list.html>,实现上有LinkedList、ArrayList等多种实现方案
在golang中，可以通过container中的list（本身是一个双向链表）来实现，可以只从一端插入，另外一端去取


## 栈
先进后出的数据结构，常用于DFS等场景
在php中，本身是没有这个数据结构的，但是可以用数组去实现，因为php数组本身就是变长的,并且php原生支持array_pop() 和 array_push()之类的函数
在java中，专门又一个 [Stack类]<https://www.runoob.com/java/java-stack-class.html>,其本身实现了下面的一些方法
``` java
boolean empty()
Object peek()
Object pop()
Object push(Object element)
int search(Object element)
```
golang中也类似，不过其本身是用container中list的数据结构来实现的


## Map
基本上所有的语言都认为这是一个必需的数据结构，php中的关联数组，java中的hashmap，golang中的map。


## 参考文档
1. <https://book.douban.com/subject/19952400/>

