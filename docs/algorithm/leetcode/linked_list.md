# 链表
链表其实是日常工作中与面试都常会接触的数据结构，因为数组是固定大小，扩容成本较高，而链表的扩容成本较低，所以链表在很多场景下使用也比较广泛
## 常见考察问题

### 链表反转
关于链表反转，其实就是增加一个临时节点存储存储下当前节点的信息。
``` go
func reverseList(head *ListNode) *ListNode {

	if head == nil || head.Next == nil {
		return head
	}
	var temp *ListNode
	var pre *ListNode
	pre = nil
	for head != nil {
		temp = head.Next
		head.Next = pre
		pre = head
		head = temp
	}
	return pre
}
```

### 合并链表
如果只是关于两个链表的合并，其实比较简单。一般可能会考察更为复杂的情况，比如K个链表的合并
``` go
func mergeTwoLists(list1 *ListNode, list2 *ListNode) *ListNode {
	h := &ListNode{}
	l := h
	for list1 != nil && list2 != nil {
		if list1.Val < list2.Val {
			l.Next = &ListNode{Val: list1.Val}
			list1 = list1.Next
		} else {
			l.Next = &ListNode{Val: list2.Val}
			list2 = list2.Next
		}
		l = l.Next
	}
	if list1 != nil {
		l.Next = list1
	}

	if list2 != nil {
		l.Next = list2
	}
	return h.Next
}
```

### 链表排序
可以采用归并排序的方式
``` go
type ListNode struct {
	Val  int
	Next *ListNode
}

//https://leetcode.cn/leetbook/read/top-interview-questions/xa262d/
//链表排序

func sortList(head *ListNode) *ListNode {
	//最合适的方式是使用归并排序,其实这道题目还是考察挺全面的，考察了如何找到链表的中间节点，以归并排序
	return sort(head, nil)
}

//标准的归并排序
func sort(head *ListNode, tail *ListNode) *ListNode {
	if head == nil {
		return head
	}
	//如果只剩一个节点
	if head.Next == tail {
		head.Next = nil
		return head
	}

	//快慢指针寻找中间点
	slow, fast := head, head
	for fast != tail {
		slow = slow.Next
		fast = fast.Next
		if fast != tail {
			fast = fast.Next
		}
	}
	mid := slow
	return merge(sort(head, mid), sort(mid, tail))
}

//merge链表
//因为传进来的是指针，不能改变原来链表中的数据
func merge(list1 *ListNode, list2 *ListNode) *ListNode {
	resListNode := &ListNode{}
	temp, temp1, temp2 := resListNode, list1, list2
	for temp1 != nil && temp2 != nil {
		if temp1.Val < temp2.Val {
			temp.Next = temp1
			temp1 = temp1.Next
		} else {
			temp.Next = temp2
			temp2 = temp2.Next
		}
		temp = temp.Next
	}
	if temp1 == nil {
		temp.Next = temp2
	} else if temp2 == nil {
		temp.Next = temp1
	}
	return resListNode.Next
}
```


### 复制链表
关于单纯的复制链表比较简单，就是遍历链表，然后不停地新建节点，按这个顺序去建立并串联起来，所以一般也不会考察这种最简单的情况，而是会做一些变种，比如 [复制带随机指针的链表](https://leetcode.cn/leetbook/read/top-interview-questions/xam1wr/)
``` go
var nodeMap map[*Node]*Node

func copyRandomList(head *Node) *Node {
	nodeMap = map[*Node]*Node{}
	return deepCopy(head)
}

func deepCopy(node *Node) *Node {
	if node == nil {
		return nil
	}

	//如果已经创建过，那就返回
	n, ok := nodeMap[node]
	if ok {
		return n
	}

	//否则就进行节点的创建
	newNode := &Node{
		Val: node.Val,
	}
	nodeMap[node] = newNode
	//将问题不断递归
	newNode.Next = deepCopy(node.Next)
	newNode.Random = deepCopy(node.Random)
	return newNode
}

```


### 两个链表相交
这道题目其实很巧妙，<https://leetcode.cn/problems/intersection-of-two-linked-lists-lcci/solutions/>
``` go
func getIntersectionNode(headA, headB *ListNode) *ListNode {

	if headA == nil || headB == nil {
		return nil
	}

	pa := headA
	pb := headB
	for pa != pb {
		if pa != nil {
			pa = pa.Next
		} else {
			pa = headB
		}

		if pb != nil {
			pb = pb.Next
		} else {
			pb = headA
		}
	}
	return pa
}

```
这种其实就是最典型的双指针的问题，一般涉及两个点之前的比较或者计算，常用就是双指针

### 奇偶链表
``` go
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func oddEvenList(head *ListNode) *ListNode {
    if head == nil || head.Next == nil{
        return head
    }
    slow := head
    quick := head.Next
    headQuick := head.Next
    for quick != nil && quick.Next != nil{
        slow.Next = slow.Next.Next
        quick.Next = quick.Next.Next
        slow = slow.Next
        quick = quick.Next
    }
    //遍历结束之后
    slow.Next = headQuick
    return head
    
}
```

## 总结
其实关于链表的题目，都可以多往双指针方面去思考，很多难题说不定就迎刃而解了。


