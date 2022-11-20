# redis
redis其实也是一种存储，虽然大家很多时候认为其是缓存，但缓存与存储的界限，很多时候并没有我们想的这般泾渭分明。

## 关于redis的高可用架构
我们知道，单机的redis，无论你如何去保证其可用性，比如AOF和RDB，但物理机终究有损坏的可能性，宕机会造成服务端不可能，机器物理损坏则会造成数据的丢失。
并且单机的物理容量有限，无论你硬盘和内存再怎么扩，单个物理机也还是有上限的。

### 集群方案
#### 主从方案
主要问题有以下几点：
1. 无法横向扩容与自动恢复
2. 在线纵向扩容困难，需要停机
3. 主机宕机可能会导致数据不同步的问题
4. 宕机重启后会影响master的IO

#### Sentinel方案
可以自动恢复，但始终没办法解决扩容的问题


#### 集群方案
没有采用一致性hash的方案，这是比较让我觉得意外的

redis一致性hash一般是客户端方案，redis的hash槽是服务端方案


分布式架构：
1. 可自动扩缩容
2. 高可用，数据不易丢失


## redis的分布式一致性
1. 可参考[这篇文档](https://learn.lianglianglee.com/%E4%B8%93%E6%A0%8F/%E5%88%86%E5%B8%83%E5%BC%8F%E4%B8%AD%E9%97%B4%E4%BB%B6%E5%AE%9E%E8%B7%B5%E4%B9%8B%E8%B7%AF%EF%BC%88%E5%AE%8C%EF%BC%89/04%20%E5%88%86%E5%B8%83%E5%BC%8F%E4%B8%80%E8%87%B4%E6%80%A7%E5%8D%8F%E8%AE%AE%20Gossip%20%E5%92%8C%20Redis%20%E9%9B%86%E7%BE%A4%E5%8E%9F%E7%90%86%E8%A7%A3%E6%9E%90.md)

## 应用场景
### 分布式锁
具体可参考[这篇文档](http://www.redis.cn/topics/distlock.html)


## 文档
1. <http://www.redis.cn/topics/sentinel.html>
2. <http://www.redis.cn/topics/cluster-tutorial.html>