# 关于图论
>图是图论的主要研究对象。图是由若干给定的顶点及连接两顶点的边所构成的图形，这种图形通常用来描述某些事物之间的某种特定关系。顶点用于代表事物，连接两顶点的边则用于表示两个事物间具有这种关系。


图论比较核心的一个问题是，我们是用邻接链表，还是邻接矩阵去存储相关的数据。
对于那种边比较多的图，采用邻接矩阵更为合适
对于那种边比较少的图，采用邻接链表更为合适


## 拓扑排序
图论中比较经典的题目就是拓扑排序了
``` go
//https://leetcode.cn/problems/course-schedule/description/
//课程表
//标准的拓扑排序

func canFinish(numCourses int, prerequisites [][]int) bool {
	//采用dfs的方式
	valid := true
	//存储每个节点是否访问过，0表示没有访问过，1表示访问过，2表示已经访问过
	visited := make([]int, numCourses)
	//采用邻接链表的方式存储
	edges := make([][]int, numCourses)
	var dfs func(u int)
	dfs = func(u int) {
		visited[u] = 1
		for _, v := range edges[u] {
			if visited[v] == 0 {
				dfs(v)
				if !valid {
					return
				}
			} else if visited[v] == 1 {
				valid = false
				return
			}
		}
		visited[u] = 2
	}
	//构造邻接链表
	for _, v := range prerequisites {
		edges[v[1]] = append(edges[v[1]], v[0])
	}
	for i := 0; i < numCourses && valid; i++ {
		if visited[i] == 0 {
			dfs(i)
		}
	}
	return valid
}
```



## 参考文档
1. <https://zh.m.wikipedia.org/zh/%E5%9B%BE%E8%AE%BA>
2. <https://zh.wikipedia.org/wiki/%E6%8B%93%E6%92%B2%E6%8E%92%E5%BA%8F>
3. <https://zhuanlan.zhihu.com/p/25498681>