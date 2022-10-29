# 树
因为当前计算机的cpu速度远高于内存或者硬盘等介质的存储速度，所以需要尽可能地单次读取尽可能匹配的数据，树就是一种很合适的数据结构

## 二叉树
二叉树作为最容易理解的树，也适合当做考察点

### 二叉树遍历
关于二叉树的遍历，其实就是关于DFS和BFS的考察，而DFS其实又会依赖于栈（后进先出），BFS会依赖于队列（先进先出），这个考察的方面其实会比较全面
以前序遍历为例,这种是递归的方式，如果采用非递归的方式，就需要借助于栈和队列了。
``` go
func preorderTraversal(root *TreeNode) []int {
	if root == nil {
		return []int{}
	}
	ans := []int{}
	ans = append(ans, root.Val)
	ans = append(ans, preorderTraversal(root.Left)...)
	ans = append(ans, preorderTraversal(root.Right)...)
	return ans
}
```

### 翻转二叉树
很多题目确实是用递归的方式最简单
``` go
func invertTree(root *TreeNode) *TreeNode {
	invert(root)
	return root
}

func invert(node *TreeNode) {
	if node == nil {
		return
	}
	node.Left, node.Right = node.Right, node.Left
	invert(node.Left)
	invert(node.Right)
}
```

### 二叉树的高度
这个也是适合递归求解的
``` go
//求二叉树的最大深度
func maxDepth(root *TreeNode) int {
	//终止条件
	if root == nil {
		return 0
	}
	leftDepth := maxDepth(root.Left) + 1
	rightDepth := maxDepth(root.Right) + 1
	return maxVal(leftDepth, rightDepth)
}

func maxVal(a int, b int) int {
	if a > b {
		return a
	}
	return b
}
```

### 合并二叉树
递归+1
``` go
func mergeTrees(root1 *TreeNode, root2 *TreeNode) *TreeNode {
	if root1 == nil {
		return root2
	}
	if root2 == nil {
		return root1
	}
	root1.Val += root2.Val
	mergeTreesV2(root1.Left, root2.Left)
	mergeTreesV2(root1.Right, root2.Right)
	return root1
}
```

### 二叉树的公共祖先
``` go
//https://leetcode.cn/problems/er-cha-shu-de-zui-jin-gong-gong-zu-xian-lcof/
//二叉树的最近公共祖先
func lowestCommonAncestor(root, p, q *TreeNode) *TreeNode {
	if root == nil {
		return root
	}
	if p == root || q == root {
		return root
	}
	left := lowestCommonAncestor(root.Left, p, q)
	right := lowestCommonAncestor(root.Right, p, q)
	if left == nil {
		return right
	} else if right == nil {
		return left
	}
	return root
}

```

### 另一棵树的子树
``` go
//判断是否子树
func isSubtree(root *TreeNode, subRoot *TreeNode) bool {
	if root == nil {
		return false
	}
	return dfs(root, subRoot) || isSubtree(root.Left, subRoot) || isSubtree(root.Right, subRoot)
}

func dfs(A *TreeNode, B *TreeNode) bool {
	//终止态
	if A == nil && B == nil {
		return true
	}
	if A == nil || B == nil {
		return false
	}
	if A.Val != B.Val {
		return false
	}
	return dfs(A.Left, B.Left) && dfs(A.Right, B.Right)
}

```

## 变种
### 红黑树
红黑树作为有名的变种之一，一般很少考察，因为确实比较复杂，也很少有人能够在短时间内写出bug free的红黑树

### N叉树
一般B树和B+树会作为其考察的一个重点，但一般也只是询问原理，以及为何需要使用

## 一些思考
1. 什么时候是比较值，什么时候是两个指针地址直接比较


## 参考链接
1. <https://zh.wikipedia.org/wiki/AVL%E6%A0%91>
2. <https://leetcode.cn/leetbook/read/data-structure-binary-tree/xefb4e/>