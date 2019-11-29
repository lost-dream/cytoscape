---
title: 关于
---
## 关于

Cytoscape.js是一个用JS编写的开源[图论](http://en.wikipedia.org/wiki/Graph_theory)（又名网络）库。您可以使用Cytoscape.js进行图形分析和可视化

Cytoscape.js允许您轻松显示和操作丰富的交互式图形。由于Cytoscape.js允许用户与图形进行交互，并且库允许客户端挂接到用户事件，因此Cytoscape.js可以轻松集成到您的应用程序中，尤其是因为Cytoscape.js支持桌面浏览器（例如Chrome）和移动浏览器，就像在iPad上一样。

Cytoscape.js包含了开箱即用的所有手势，包括捏缩放，框选择，平移等

Cytoscape.js还考虑了图分析：该库包含图论中的许多有用功能。您可以在Node.js上无头使用Cytoscape.js在终端或Web服务器上进行图形分析

Cytoscape.js是一个开源项目，任何人都可以自由贡献。有关更多信息，请参阅[GitHub README](https://github.com/cytoscape/cytoscape.js)

该库是在创建唐纳利中心在多伦多大学。它是[Cytoscape Web](http://cytoscapeweb.cytoscape.org/)的继承者

## 包管理器

* npm: `npm install cytoscape`
* bower: `bower install cytoscape`
* jspm: `jspm install npm:cytoscape`

## 架构和API

为了使用Cytoscape.js，开发人员需要自己考虑架构中的两个组件，即核心（即图形实例）和集合。在Cytoscape.js中，核心指程序员进入库的主要入口。开发人员可以从整体上运行布局，更改视口并在整个图形上执行其他操作

核心提供了几种访问图中元素的功能。这些函数中的每一个都返回一个集合，即图形中的一组元素。集合上有可用的函数，开发人员可以通过这些函数过滤集合，对集合执行操作，遍历有关集合的图，获取有关集合中元素的数据等

<p class="tips">请注意，默认情况下集合是不可变的，这意味着不能更改集合中的元素集。API会在必要时返回带有不同元素的新集合，而不是对现有集合进行突变。这使开发人员可以安全地对集合使用集合论运算，在功能上使用集合等。请注意，由于集合只是元素列表，因此创建新集合更节省合理</p>

<p class="tips">对于非常注重性能的代码，可以使用`eles.merge()`和`eles.unmerge()`将集合处理为可变的。尽管大多数应用永远都不需要这些功能</p>

## 功能

可以执行多种功能的类型有几种，在文档中用于表示这些类型的变量名称概述如下

| 速记 | 作用于 |
| :---: | :---: |
| cy | 核心 |
| eles | 一个或多个元素（节点和边）的集合 |
| ele | 单个元素（节点或边）的集合 |
| nodes | 一个或多个节点的集合 |
| node | 单节点的集合 |
| edges | 一个或多个边的集合 |
| edge | 单边的集合 |
| layout | 布局 |
| ani | 动画 |

默认情况下，函数会将引用返回给调用对象，以允许链式调用`(obj.fn1().fn2().fn3())`。除非本文档中另有说明，否则函数均可以这种方式链接，除非指定了不同的返回值。这适用于核心和集合。

对于返回了值的函数，请注意，**调用单一- ele，node或者edge-在多个元素的集合函数将返回预期值仅为第一个元素**

## 对象所有权

当将对象传递到Cytoscape.js来创建元素，动画，布局等时，这些对象被视为Cytoscape所拥有。像元素这样的对象具有多层嵌套结构，每次将它们传递给Cytoscape时都要对这些对象进行深拷贝，这会产生额外的开销。如果需要，程序员可以在将对象传递到Cytoscape之前手动对其进行复制。但是，大多数情况下，大多数程序员不需要复制。

## 手势

Cytoscape.js支持几种手势

* 抓取并拖动背景进行平移：触摸和桌面
* 捏放大：触摸和桌面（带有支持的触控板）
* 鼠标滚轮缩放：桌面
* 两指触控板向上或向下缩放：桌面
* 点按以选择：触摸和桌面
* 点击背景以取消选择：桌面
* 点按背景以取消选择：桌面和触摸
* 通过修饰键（Shift，Command，Control，Alt）+ Tap进行多重选择：桌面
* 框选择：触摸（三指滑动）和桌面（修改键+鼠标向下然后拖动）
* 抓取并拖动节点：触摸和桌面

程序员可以控制所有手势动作，并在按照需要打开或关闭这些功能

## 位置

节点的位置是指其主体的中心点

位置有一个重要的区别：位置可以是`模型位置`或`渲染位置`

顾名思义，模型位置是元素在模型中存储的位置。尽管缩放和平移，元素的模型位置仍保持恒定。在模型坐标中指定了数字样式属性值，例如，宽度为20px的节点在缩放1时将为20像素宽。

渲染位置是屏幕上相对于视口的位置。例如，渲染位置{ x: 100, y: 100 }指定的点是从视口向右100像素和从左上角向下100像素。缩放1和平移（0，0）时，模型位置和渲染位置相同。

元素的渲染位置会随着缩放和平移而变化，因为视口中元素在屏幕上的位置会随着缩放和平移而变化。平移始终以渲染的坐标进行测量。

<p class="tips">在本文档中，“位置”是指模型位置，除非另有说明。</p>

节点的位置可以手动设置，也可以使用layout自动设置。由于两个节点的位置会影响两个节点之间的边缘长度，因此布局可以有效地设置边缘长度。

## 元素JSON

以下示例给出了将元素加载到Cytoscape.js中的JSON元素的格式

```javascript
cytoscape({
  container: document.getElementById('cy'),
  elements: [ // 存放节点和关系线的数组
    { // 节点 n1
      group: 'nodes', // 节点值为'nodes',关系线值为'edges'
      // group字段可以自动计算得到，但是如果您错误地初始化了元素，那么指定它会给您更准确的警告

      data: { // 节点数据 (将json序列化的d数据放在这里)
        id: 'n1', // 每个节点必须有的标识符，在未定义时自动分配
        parent: 'nparent', // 表示复合节点父id;未定义 === 没有父节点
        // `parent`可以通过`eles.move()`删除
      },

      // 暂存数据(通常是临时数据或非序列化数据)
      scratch: {
        _foo: 'bar' // 以下划线为前缀的应用程序字段;没有前缀扩展字段
      },

      position: { // 节点的模型位置(init时可选，之后强制)
        x: 100,
        y: 100
      },

      selected: false, // 元素是否被选中(默认为false)
      selectable: true, // 选择状态是否可变(默认为true)
      locked: false, // 当被锁定时，节点的位置是不可变的(默认为false)
      grabbable: true, // 用户是否可以抓取和移动节点
      pannable: false, // 是否拖动节点会导致平移而不是抓取
      classes: ['foo', 'bar'] // 元素具有的类名数组(或用空格分隔的字符串)
    },
    {
      data: { id: 'n2' },
      renderedPosition: { x: 200, y: 200 } // 可以指定位置在渲染的屏幕像素
    },

    {
      data: { id: 'n3', parent: 'nparent' },
      position: { x: 123, y: 234 }
    },

    {
      data: { id: 'nparent' }
    },

    { // 关系线
      data: {
        id: 'e1',
        source: 'n1', // 起始节点的id，关系线的起始点
        target: 'n2'  // 目标节点的id，关系线的终点
        // `source` and `target`的关系可以通过`eles.move()`改变
      },
T
      pannable: true // 是否拖动边缘会导致平移
    }
  ],

  layout: {
    name: 'preset'
  },

  style: [
    {
      selector: 'node',
      style: {
        'label': 'data(id)'
      }
    }
  ]
});
```

JSON元素也可以采用以下格式

```javascript
cytoscape({
  container: document.getElementById('cy'),

  elements: {
    nodes: [
      { data: { id: 'a' } },
      { data: { id: 'b' } }
    ],
    edges: [
      {
        data: { id: 'ab', source: 'a', target: 'b' }
      }
    ]
  },

  layout: {
    name: 'grid',
    rows: 1
  },

  style: [
    {
      selector: 'node',
      style: {
        'label': 'data(id)'
      }
    }
  ]
});
```

## 复合节点

复合节点是传统图形模型的补充。复合节点包含许多子节点，类似于HTML DOM元素可以包含许多子元素的方式。

复合节点是通过parent元素的中的字段指定的data。与`edge` 的`source` 和 `target`字段相似，该parent字段通常是不可变的：在将节点添加到图形中时，可以指定该节点的父节点，此后，该父子关系通过变为不可变的ele.data()。但是，您可以通过来移动子节点eles.move()。

<p class="tips">复合父节点没有独立的维度（位置和大小），因为这些值是由后代节点的位置和维度自动推断的。</p>

就API而言，复合节点的处理方式与常规节点相同，只是在复合节点中可以使用node.parent()。这意味着传统的图论功能像`eles.dijkstra()`，`eles.neighborhood()`也没有对它们做特殊的规定，因此您可能需要根据用例对API进行不同的调用。

例如：

```javascript
var a = cy.$('#a'); // 假设有一个复合节点

// a的邻域包含了直接连接的元素
var directlyConnected = a.neighborhood();

// 相反，您可能希望所有内容都与它的后代相关
// 因为后代“属于”a
var indirectlyConnected = a.add( a.descendants() ).neighborhood();
```
