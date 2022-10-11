# 关于mysql
mysql可以说是关系型数据库的典型了，大多数互联网公司以及中小公司需要使用关系型数据库的首选。
其本身也是演进的，从 myisam 演进到 innodb 等多种存储引擎
以前的时候，会觉得存储引擎这种词很高大上，但实际上呢，也不过是数据库组织存储数据的方式，我们对数据进行增删改查等各种操作其实都是通过存储引擎。
其实有点类似于我们对文件的变更，其实都是通过操作系统的API去对文件系统（wiki百科的定义，文件系统是一种用于向用户提供底层数据存取的机制）进行操作

## 存储引擎
类似于mysql常用的存储引擎主要有innodb和myisam，一般无特殊要求的情况下，都是使用innodb。
innodb与myisam其中最大的区别就是对于事务的支持，以及对于行锁的支持，而这个支持

### innodb
如何实现事务

## 关于索引的选择


## 存储的数据结构
关系型数据库一般是按行组织数据。
例如mysql中的innoDB存储引擎采用B+树作为存储，pgsql中使用B树。  
今天的各种存储引擎也有用[跳表](https://en.wikipedia.org/wiki/Skip_list)（以redis为例）和[LSM树](https://en.wikipedia.org/wiki/Log-structured_merge-tree)(以rocksdb为例)

B树与B+树之间的区别是，数据是否会存储在叶子节点
相关的详细比较可以参考[这篇文章](https://segmentfault.com/a/1190000021488885)

其实采用树这种数据结构的根本原因还是在于，磁盘的读取成本很高，而cpu计算很快


## 事务
ACID原则，原子性，一致性，隔离性，持久性
隔离性上，其实又会分四种隔离级别
### 未提交读

### 提交读
### 可重复读
可重复读也不能解决幻读的问题，因为范围查询

### 可串行化


## 关于mysql的高可用方案
具体可参考[这篇文章](https://zhuanlan.zhihu.com/p/25960208)，其实核心还是那几种方案，主从，双主，多副本

## mysql的横向扩展
可以直接关注横向扩展方案。目前官方是使用[Group Replication](https://dev.mysql.com/doc/refman/8.0/en/group-replication.html)的方案  
节点新增或减少对数据的迁移，以及如何对事务的支持  
Google的[spanner论文](https://dl.acm.org/doi/pdf/10.1145/2491245)其实是一个很好的解决方案
看下 TIDB 中是如何对分布式事务进行支持的，可看[这篇文档](https://docs.pingcap.com/zh/tidb/stable/optimistic-transaction])


## 参考文档
1. <https://dev.mysql.com/doc/>
2. <https://baike.baidu.com/item/%E5%AD%98%E5%82%A8%E5%BC%95%E6%93%8E/8969956>
3. <https://baike.baidu.com/item/%E5%85%B3%E7%B3%BB%E5%9E%8B%E6%95%B0%E6%8D%AE%E5%BA%93/8999831>
4. <https://zh.m.wikipedia.org/zh-hans/%E4%BA%8B%E5%8B%99%E9%9A%94%E9%9B%A2>
5. <https://draveness.me/whys-the-design-mysql-b-plus-tree/>
6. <https://zh.m.wikipedia.org/zh-hans/B%2B%E6%A0%91>
7. <https://redisbook.readthedocs.io/en/latest/internal-datastruct/skiplist.html>
8. <https://dev.mysql.com/doc/refman/8.0/en/group-replication.html>