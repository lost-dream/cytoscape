---
title: 介绍
pageClass: custom-page-class
---
## cytoscape.js是什么

* 用原生JS编写的功能齐全的图形库
* 核心Cytoscape.js库和所有第一方扩展的开放源代码许可（MIT）
* 可用于生产中的商业项目和开源项目
* 专为用户至上，对于frontfacing应用usecases 和开发商usecases
* 高度优化
* 兼容
  * 所有现代浏览器
  * 支持ES5和canvas的旧版本浏览器
    * 支持ES5和canvas，并且功能检测用于可选性增强
    * 2012年前后的浏览器完全支持ES5：IE10，Chrome 23，Firefox 21，Safari 6（[caniuse](https://caniuse.com/#feat=es5)）
    * 部分足够支持ES5的浏览器也可以使用，例如 IE9 和 Firefox 4
    * 尽管库本身是最佳的，但文档和示例并未针对旧的浏览器进行优化。为了使演示代码简单，某些演示可能无法在旧的浏览器中运行
  * 模块系统
    * ES模块
    * UMD
    * CommonJS / Node.js
    * Globals
    * AMD / Require.js
  * 包管理器
    * npm
    * yarn
    * bower
  * 通过[RCyjs](http://www.bioconductor.org/packages/release/bioc/html/RCyjs.html)支持[R语言](https://www.r-project.org/)
  * 支持通过[Cytosnap](https://github.com/cytoscape/cytosnap)在Node.js上渲染图像
  * 通过大量的测试，保证可以在浏览器或终端运行
  * 文档包括实时代码示例，可作为交互式需求规范；示例图也可以在浏览器的JS控制台中自由修改
  * 完全可以通过JSON序列化和反序列化
  * 使用布局来自动或手动定位节点
  * 支持使用选择器进行简短过滤和图形查询
  * 使用样式表以呈现不可知的方式将表示与数据分离
  * 在熟悉的事件模型之上抽象和统一的触摸事件
  * 内置支持台式机和触摸屏上的标准手势
  * 可链接以方便使用
  * 支持功能编程模式
  * 支持集合论运算
  * 包括图论算法，从BFS到PageRank
  * 动画图元素和视口
  * 完全可扩展（提供修改扩展用的脚手架）
  * 维护良好
    * 每周发布补丁
    * 每月发布版本
  * 在[Zenodo](https://zenodo.org/record/3547834)列出了每个版本的DOI
  * 由[OMIC Tools](https://omictools.com/cytoscape-js-tool)列出
