# 一些常见问题
1. Golang中切片的扩展规则
其实可以理解为切片如何做自动扩容
可以参考[这篇文章](https://draveness.me/golang/docs/part2-foundation/ch03-datastructure/golang-array-and-slice/),以及golang中的源码
``` go
	newcap := old.cap
	doublecap := newcap + newcap
	if cap > doublecap {
		newcap = cap
	} else {
		const threshold = 256
		if old.cap < threshold {
			newcap = doublecap
		} else {
			// Check 0 < newcap to detect overflow
			// and prevent an infinite loop.
			for 0 < newcap && newcap < cap {
				// Transition from growing 2x for small slices
				// to growing 1.25x for large slices. This formula
				// gives a smooth-ish transition between the two.
				newcap += (newcap + 3*threshold) / 4
			}
			// Set newcap to the requested cap when
			// the newcap calculation overflowed.
			if newcap <= 0 {
				newcap = cap
			}
		}
	}
```
扩容的规则显而易见，新的cap的计算分为以下几种情况：
1）如果没有达到当前分配的容量，其实就不需要扩容，cap不变
2）newcap超过oldcap的2倍的话，直接扩容到新的cap
3）新的cap未超过旧的cap的2倍，但小于256，则直接newcap
4）如果已经超过256，则每次扩容1.25倍

2. 由第一个问题可以引申出第二个问题，golang中的map的扩容
这块可以参考[这篇文章](https://draveness.me/golang/docs/part2-foundation/ch03-datastructure/golang-hashmap/)

3. Golang中json解析相关的问题

``` go
	//测试下切片相关的操作
	var a []int
	if a == nil {
		fmt.Println("a is nil")
	}

	b := make([]int, 0)
	if b == nil {
		fmt.Println("b is nil")
	}
	//output
	// a is nil

```
这个是类型初始化方式的不同，golang中是否会分配默认值，或者是实际占用内存，类似于用var这种方式定义切片，其实本身是没有实际分配内存的
会导致json解析的结果不同

4. 关于反射的使用场景
我理解其实线上服务应该尽可能的少用反射，因为反射本身是有性能损耗的，但一些场景来说，其实反射也是不可或缺的
关于反射的原理，可以参考[这篇文章](https://mp.weixin.qq.com/s/298AO5no7MUlDGGGK9aPeQ)  
网上的示例使用场景是用于类似于ORM框架这种，将对象本身转化成sql

