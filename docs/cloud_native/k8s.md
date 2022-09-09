# 关于k8s
在云原生时代，k8s已经成为事实上的基建，可以理解为云原生时代的操作系统。  
有的人会把k8s与docker搞混，其实可以理解为操作系统和进程的关系，而pod更像是一个应用程序，里面可以包含多个docker，并且可以管理docker的启动顺序，也就是管理依赖  
其实还有一个核心问题，就是关于不同pod的通信问题。在同一个机器上，其实有很多的方式进行通信，大家可以通过unixsocket，共享内存等方式，但在云原生中，虽然都在同一个集群中，但机器过多的话，单个网段下无法配置完，会跨网段，如何进行跨网段的通信，这也是我们所需要考虑的  

k8s虽然早期依赖于docker，但现在其实本身已经与docker解耦，只要你实现了k8s的声明接口，k8s也就可以对起进行容器编排与调度。其实有点类似于，只要文件系统实现了相关的文件操作API，操作系统就能正常地对这些文件进行管理。


## 核心概念
### pod
> 在 Kubernetes 中创建和管理的、最小的可部署的计算单元
pod是一组容器，这些容器共享存储、网络，以及怎样运行这些容器的声明

#### 生命周期
可参考这篇[文档](https://kubernetes.io/zh-cn/docs/concepts/workloads/pods/pod-lifecycle/)，
pod的状态
1. Pending
2. Running
3. Succeeded
4. Failed
5. Unknown

容器的状态主要有三种：
1. Waiting
2. Running
3. Terminated

#### 主要的两种用法
1. 运行单个容器的pod
2. 运行多个协同工作的容器pod
其实这个最主要的问题


## 工作负载资源
### DaemonSet
[相关文档](https://kubernetes.io/zh-cn/docs/reference/kubernetes-api/workload-resources/daemon-set-v1/)
其实就是守护进程的集合




## 参考文档
1. <https://kubernetes.io/zh-cn/docs/tutorials/kubernetes-basics/>
2. [Pod](https://kubernetes.io/zh-cn/docs/concepts/workloads/pods/)