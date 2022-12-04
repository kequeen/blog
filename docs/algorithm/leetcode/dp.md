# 关于动态规划
动态规划相关的算法，其实是这些年面试最常见的高频题目了，其实也是相当考验个人能力  
有时候会很喜欢dp的思想，构建状态转移方程，就能够通过自顶向下地计算获取结果  
最核心的就是如何构造出动态规划方程  
其实最容易搞混的就是递归与动态规划的必然联系，应该是说动态规划其实是将大问题拆解为小问题，而需要优化的话，一般就是存储已经求解的子问题的答案，减少重复计算。一般其实采用自底向上计算

## 背包问题

### 0-1背包问题
看到这个[滚动数组](https://www.cnblogs.com/RioTian/p/12397821.html)的优化，还是很有意思的，最新的状态只依赖于有限的几个状态，确实没必要去保存所有的状态。其实按照《计算之魂》这本书中的观点里面提到的也一样，去掉无用的计算。

### 完全背包问题

## 其他典型题目
### 爬楼梯
动态规划的经典题目，也是比较容易理解的。其实最核心的就是想出递推公式
``` go
//最经典的爬楼梯问题 https://leetcode.cn/leetbook/read/top-interview-questions-easy/xn854d/
func climbStairs(n int) int {
	//这种直接递归的方式会超时
	//dp公式 dp[n] = dp[n-1] + dp[n-2]
	//dp[1] = 1, dp[2] =2
	if n == 1 || n == 2 {
		return n
	}
	return climbStairs(n-1) + climbStairs(n-2)
}
```
做一些优化，存储历史状态，减少重复计算
``` go
//不重复计算，以空间换时间
func climbStairsV2(n int) int {
	if n == 1 || n == 2 {
		return n
	}
	dp := make([]int, n+1)
	//初始化
	dp[1] = 1
	dp[2] = 2
	for i := 3; i <= n; i++ {
		dp[i] = dp[i-1] + dp[i-2]
	}
	return dp[n]
}

```
对空间的更极致的优化，其实就是上面所提到的，对于迭代而言，只需要保留前两个状态就可以，不需要保留整个数组
``` go
func climbStairs(n int) int {
	if n == 1 || n == 2 {
		return n
	}
	//其实只需要存储三个变量，结果ans，前面的两个变量p,q
	p := 1
	q := 2
	ans := 0
	for i := 3; i <= n; i++ {
		ans = p + q
		p = q
		q = ans
	}
	return ans
}
```

### 爬楼梯变种
[爬楼梯的最少成本](https://leetcode.cn/problems/GzCJIP/description/)
``` go
func minCostClimbingStairs(cost []int) int {
    //dp[i] = min(dp[i-1] + cost[i-1],dp[i-2]+cost[i-2])
    if len(cost) < 2 {
        return 0
    }
    n := len(cost)
    dp := make([]int, len(cost)+1)
    dp[0] = 0
    dp[1] = 0
    for i := 2; i <= n;i++{
        dp[i] = min(dp[i-1]+cost[i-1], dp[i-2]+cost[i-2])
    }
    return dp[n]
}

func min(a,b int)int{
    if a > b{
        return b
    }
    return a
}
```


## 参考文档：
1. <https://zhuanlan.zhihu.com/p/93857890>
2. <https://zh.m.wikipedia.org/zh/%E8%83%8C%E5%8C%85%E9%97%AE%E9%A2%98>
3. <https://www.geeksforgeeks.org/solve-dynamic-programming-problem/?ref=lbp>
4. <https://zh.m.wikipedia.org/zh/%E5%88%86%E6%B2%BB%E6%B3%95> 
