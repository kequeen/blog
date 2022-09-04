# ES
ES是当今最为流行的开源搜索解决方案，对于大部分通用的场景，ES应该都是可以满足的。

## 关于通用搜索流程
基本上与[这篇文章](http://www.kequeen.work/search/principle.html)中谈到的相符合。但很多时候我们也需要添加我们自己的业务逻辑  
离线部分的话，数据的入库可以自定义处理脚本
在线部分的话，一般我们需要关注的，一般是召回部分（改写、纠错与分词），因为默认的中文分词在很多情况下无法符合预期，以及因为一些异常情况下的干预，一般在召回部分做干预的成本较低。  
检索的话，除了默认的计算相关性的方式之外，也支持我们自定义脚本计算相关性


## ES的正排与倒排的存储
数据的分片一般是根据doc_id来进行分片的，正常我们在容量规划的时候就需要进行确认

## 关于ES的数据更新及平衡过程
其实这个问题就是，ES的数据如何无限横向扩展

## ES对sql的支持
在官方的最新文档中，[sql-getting-started](https://www.elastic.co/guide/en/elasticsearch/reference/current/sql-getting-started.html),发现已经支持sql了

```
POST /_sql?format=txt
{
  "query": "SELECT * FROM library WHERE release_date < '2000-01-01'"
}
```


## 参考文档
1. <https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html>
2. <https://github.com/elastic/elasticsearch>
3. <https://www.elastic.co/guide/en/elasticsearch/reference/current/high-availability-cluster-small-clusters.html>