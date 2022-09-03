# 关于mysql
mysql可以说是关系型数据库的典型了，大多数互联网公司以及中小公司需要使用关系型数据库的首选。
其本身也是演进的，从 myisam 演进到 innodb 等多种存储引擎
以前的时候，会觉得存储引擎这种词很高大上，但实际上呢，也不过是数据库组织存储数据的方式，我们对数据进行增删改查等各种操作其实都是通过存储引擎。
其实有点类似于我们对文件的变更，其实都是通过操作系统的API去对文件系统（wiki百科的定义，文件系统是一种用于向用户提供底层数据存取的机制）进行操作

## 存储引擎
类似于mysql常用的存储引擎主要有innodb和myisam，一般无特殊要求的情况下，都是使用innodb。
其中最大的区别是

## 关于索引的选择


## 存储的数据结构
关系型数据库一般是按行组织数据。
例如mysql中的innoDB存储引擎采用B+树作为存储，pgsql中使用B树，
B树与B+树之间的区别是，数据是否会存储在叶子节点

mysql的非


## 事务
ACID原则，原子性，一致性，隔离性，持久性
隔离性上，其实又会分四种隔离级别
### 未提交读

### 提交读
### 可重复读
### 可串行化

## 参考文档
1. <https://dev.mysql.com/doc/>
2. <https://baike.baidu.com/item/%E5%AD%98%E5%82%A8%E5%BC%95%E6%93%8E/8969956>
3. <https://baike.baidu.com/item/%E5%85%B3%E7%B3%BB%E5%9E%8B%E6%95%B0%E6%8D%AE%E5%BA%93/8999831>
4. <https://zh.m.wikipedia.org/zh-hans/%E4%BA%8B%E5%8B%99%E9%9A%94%E9%9B%A2>
5. <https://draveness.me/whys-the-design-mysql-b-plus-tree/>
6. <https://zh.m.wikipedia.org/zh-hans/B%2B%E6%A0%91>