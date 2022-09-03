# 关于mongo
[官方文档](https://www.mongodb.com/docs/manual/introduction/)
国内一般大部分中小企业的应用场景其实用 mysql 就可以满足了，而一般我们在哪些场景下会用到mongo呢

## 与关系型数据库的观念映射
熟悉mysql的用户会更容易理解这个对比
1、mongodb与 mysql 都有database 这个层级的概念
2、mongo 中的 collection 可以理解为 mysql 中的 table
3、mongo 中的 document 可以理解为 mysql 中的行
4、document中的field 可以理解为 mysql 中的列
5、索引的意义对于 mysql 与 mongodb 来说是一样的，虽然他们的底层实现不一样
6、游标的概念

mongodb中查询语言层面支持MR，这个还是挺离谱的，虽然TIDB中

参考资料:
1. <https://github.com/justinyhuang/the-little-mongodb-book-cn/blob/master/mongodb.md>