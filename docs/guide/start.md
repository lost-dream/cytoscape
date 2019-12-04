---
title: 初始化
---
## 创建一个cytoscape实例

Cytoscape.js的一个实例对应一个图。您可以如下创建一个实例：

```js
const cy = cytoscape({
  container: document.getElementById('cy') // container to render in
});
```

为了方便起见，你可以传入JQuery实例：

```js
const cy = cytoscape({
  container: $('#cy')
})
```

如果要在Node.js中运行Cytoscape.js或无头运行它，则不会指定该`container`选项。在诸如Node.js之类的无头的环境中，实例自动为无头。要显式运行无头实例（例如浏览器中），可以指定`options.headless`为`true`。

## 基础参数

对于可视化的`container`、 `elements`、 `style`和`layout`选项通常应设置：

```js
const cy = cytoscape({
  container: document.getElementById('cy'),
  elements: [ // 初始的图形元素列表
    { // 节点a
      data: { id: 'a' }
    },
    { // 节点b
      data: { id: 'b' }
    },
    { // ab之间的连线，从a到b
      data: { id: 'ab', source: 'a', target: 'b' }
    }
  ],

  style: [ // 图形的样式
    {
      selector: 'node',
      style: {
        'background-color': '#666',
        'label': 'data(id)'
      }
    },

    {
      selector: 'edge',
      style: {
        'width': 3,
        'line-color': '#ccc',
        'target-arrow-color': '#ccc',
        'target-arrow-shape': 'triangle'
      }
    }
  ],

  layout: {
    name: 'grid',
    rows: 1
  }

});
```

现在，你已经创建了第一个带有基本选项的实例，更复杂的选项和配置请移步[API](/cytoscape/api)
