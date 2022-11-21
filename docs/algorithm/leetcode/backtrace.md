# 回溯法
平时工作中感觉回溯法相关的思想倒是用的不多，但是在leetcode中，其实回溯相关的还是用的挺多的，尤其是那种要获取所有分类的题目，基本都是采用回溯法去解决的。
回溯其实很多时候会依赖于深度优先搜索，并且需要自己在代码中处理各种分支情况.

最典型的就是八皇后问题

## 相关伪代码
一般流程的伪代码
```
procedure backtrack(P, c) is
    if reject(P, c) then return
    if accept(P, c) then output(P, c)
    s ← first(P, c)
    while s ≠ NULL do
        backtrack(P, s)
        s ← next(P, s)
```


## 时空复杂度
最坏情况下，回溯法的时间复杂度为指数级

## 常见的一些面试题
### 括号生成
``` go
//https://leetcode.cn/problems/generate-parentheses/description/%3Ffavorite=2cktkvj
func generateParenthesis(n int) []string {
	var s string
	ans := make([]string, 0)
	var backtrace func(string, int, int, int)
	backtrace = func(s string, open int, close int, n int) {
		if len(s) == n*2 {
			ans = append(ans, s)
			return
		}
		if open < n {
			s = s + "("
			backtrace(s, open+1, close, n)
			s = s[:len(s)-1]
		}
		if open > close {
			s = s + ")"
			backtrace(s, open, close+1, n)
		}
	}

	backtrace(s, 0, 0, n)
	return ans
}
```


### 八皇后问题

## 参考链接
1. <https://en.wikipedia.org/wiki/Backtracking>
2. <https://leetcode.cn/problems/combination-sum/solutions/406516/zu-he-zong-he-by-leetcode-solution/>