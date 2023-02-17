# 什么是**JJApplication**

**JJApplication**是由@renj开发的一系列微服务和组件, 它们共同构成了JJApp的生态

负责托管**个人主页**, **博客**, **在线文档**, **文件服务器**, **自动化任务**等等

<iframe
    src="http://service.renj.io/"
    width="100%"
    height="640"
    referrer="no-referrer"></iframe>

## 服务架构
![服务架构图](/img/service.jpg)

### 顶层设施
- NoEngine 作为外部访问入口, 负责域名转发, 反向代理, 负载均衡
- Sandwich 作为全局网关, 自动根据服务运行信息采集服务的动态端口并做转发, 同时负责流量监控和流量统计功能

### 模块
  - OctopusTree 微服务注册到全局数据库中的元数据树
  - OctopusTwig 全局的UDS转发服务端, 负责接受服务间的UDS请求转发到指定的微服务
  - WDNMD 全局的微服务状态监控模块, 在服务异常时上报告警邮件
  - Hermes 邮件服务模块, 负责smtp邮件发送
  - Eos SSL证书自动注册刷新模块

## 技术栈
根据不同时期的技术债务, 技术栈主要包括
- python
- golang
- hugo | hexo
- vue | react | typescript
- lua

## 版权所有
`JJApplication`既是一个完整的微服务群, 又是一个由一堆开源代码构成的开源组织

你可以随时根据Github的说明文档查看如何部署使用该项目, 也可以在项目LICENSE的基础上进行扩展开发

powered by [Landers](http://page.renj.io)