---
title: API
---

## 初始化

<div class="tips">
  Cytoscape.js会将警告消息打印到控制台，以帮助程序员避免错误。如果要禁用这些消息，可以使用
  <code>cytoscape.warnings(false)</code>
  以完全关闭警告。您可以使用
  <code>cytoscape.warnings(true)</code>
  打开警告，然后使用
  <code>cytoscape.warnings()</code>
  来获取当前状态。建议您至少在开发环境中启用警告。
</div>

Cytoscape.js实例具有许多可以在初始化时设置的选项。下面列出了它们的默认值。

<p class="tips">
  需要注意，所有的参数值都是可选的，默认情况下，你将初始化一份带有默认样式的空图。为了方便，浏览器外部的环境（例如Node.js）自动设置为无头。
</p>

```js
const cy = cytoscape({
  // 最常用的参数
  container: undefined,
  elements: [],
  style: [],
  layout: {
    name: 'grid'
  },

  // 初始视口状态
  zoom: 1,
  pan: {
    x: 0,
    y: 0
  },
  // 互动参数
  minZoom: 1e-50,
  maxZoom: 1e50,
  zoomingEnabled: true,
  userZoomingEnabled: true,
  panningEnabled: true,
  userPanningEnabled: true,
  boxSelectionEnabled: true,
  selectionType: 'single',
  touchTapThreshold: 8,
  desktopTapThreshold: 4,
  autolock: false,
  autoungrabify: false,
  autounselectify: false,

  // 渲染参数
  headless: false,
  styleEnabled: true,
  hideEdgesOnViewport: false,
  textureOnViewport: false,
  motionBlur: false,
  motionBlurOpacity: 0.2,
  wheelSensitivity: 1,
  pixelRatio: 'auto'
})
```

## options

| 参数名  | 参数说明 |
| :---: | :---: |
| container | HTML DOM元素，图形的容器。如果是无头运行，则不指定 |
| elements | 指定[渲染图形](/http://localhost:8080/cytoscape/guide/notation.html#%E5%85%83%E7%B4%A0json)的数组对象，为了方便，也可以指定为Promise返回的JSON元素 |
| style | 用于设置图形[样式的样式表](/foo)，为了方便，也可以指定为Promise返回css |
| layout | 指定布局选项的对象。该name字段最初指定运行哪个布局。有关布局支持的选项，请参考[布局的文档](/foo)。如果要在元素JSON中自己指定节点位置，则可以使用`preset`布局 - 默认情况下，它不设置任何位置，而将节点保留在当前位置（即options.elements在初始化时指定） |
| zoom | 图形的初始缩放级别。确保`fit`在布局中禁用视口操纵选项，以便在应用布局时不会覆盖它。您可以设置`options.minZoom`和`options.maxZoom`设置缩放级别的限制 |
| pan | 图形的初始平移位置。确保`fit`在布局中禁用视口操纵选项，以便在应用布局时不会覆盖它 |
| minZoom | 图形缩放级别的最小界限。视口的缩放比例不能小于此缩放级别 |
| maxZoom | 图形缩放级别的最大界限。视口的缩放比例不能大于此缩放级别 |
| zoomingEnabled | 是否通过用户事件或以编程方式启用了缩放图形 |
| userZoomingEnabled | 是否允许用户事件（例如，鼠标滚轮，捏缩放）缩放图形。缩放的程序更改不受此选项的影响 |
| panningEnabled | 是否通过用户事件或以编程方式启用了平移图表 |
| userPanningEnabled | 是否允许用户事件（例如，拖动图形背景）来平移图形。平移的编程更改不受此选项的影响 |
| boxSelectionEnabled | 是否启用了框选择（即，拖动框叠加并释放它以进行选择）。如果在启用了平移的同时启用了该功能，则用户必须使用修饰键（Shift，Alt，Control或Command）才能使用框选择 |
| selectionType | 一个字符串，指示用户输入的选择行为。如果值为`additive`，用户做出的新选择将添加到当前选择的元素集中。如果值为`single`，用户进行的新选择将成为当前所选元素的整个集合 |
| touchTapThreshold \|\| desktopTapThreshold | 一个非负整数，指示用户在轻击手势期间分别在触摸设备和台式设备上可以移动的最大允许距离。这使用户更容易点击。这些值具有默认值，因此除非有充分的理由，否则不建议更改这些选项 |
| autoungrabify | 默认情况下是否应取消节点的节点化（用户不可抓取）（如果true，则覆盖单个节点的状态）|
| autolock | 默认情况下是否应锁定节点（完全不可拖动）（如果true，则覆盖单个节点状态） |
| autounselectify | 默认情况下是否应取消选择节点（不可变的选择状态）（如果true，则覆盖单个元素的状态） |
| headless | 以无头形式初始化实例。在本身为无头环境无需设置（例如Node.js）。该设置用于在浏览器环境中使用无头实例 |
| styleEnabled | 是否使用样式。对于无头环境，本无需设置和显示样式，不使用样式可以加快代码的速度。如果在特殊情况下需要样式，则可以在无头环境中手动启用样式。请注意，**如果计划渲染图形，则禁用样式没有意义**。还要注意，必须调用cy.destroy()来清理启用样式的无头实例 |
| ~~hideEdgesOnViewport~~ | 设置为`true`时，将使渲染器在操纵视口时不渲染边缘。这使得平移，缩放，拖动等等对于大型图形的响应更加灵敏。**但是由于浏览器本身性能增强，现在该选项几乎没有意义** |
| ~~textureOnViewport~~ | 设置为true时，将使渲染器在平移和缩放过程中使用纹理而不是绘制元素，从而使大型图形更具响应性。**但是由于浏览器本身性能增强，现在该选项几乎没有意义** |
| ~~motionBlur~~ | 设置为true时，将使渲染器使用运动模糊效果使帧之间的过渡看起来更平滑。这可以提高大型图的感知性能。**但是由于浏览器本身性能增强，现在该选项几乎没有意义** |
| ~~motionBlurOpacity~~ | 当`motionBlur: true`时，此值控制运动模糊帧的不透明度。较高的值会使运动模糊效果更加明显。**但是由于浏览器本身性能增强，现在该选项几乎没有意义** |
| wheelSensitivity | 更改变焦时的滚轮灵敏度。这是一个乘法修饰符。因此，介于0和1之间的值会降低灵敏度（缩放较慢），而大于1的值会提高灵敏度（缩放较快）。此选项默认为一个合理的值，该值对于Linux，Mac和Windows上的主流鼠标（Apple，Logitech，Microsoft）非常有效。如果默认值在您的特定系统上看起来太快或太慢，则您的操作系统或专用鼠标可能具有非默认鼠标设置。 **除非您的应用只能在特定硬件上运行，否则您不应更改此值** |
| pixelRatio | 使用手动设置的值（如果想要设置，建议值为`1.0`）覆盖屏幕像素比率。通过减少需要渲染的有效区域，可以将其用于提高高密度显示器的性能，尽管在最新的浏览器版本中，此需求要小得多。如果要使用硬件的实际像素比率，则可以设置为默认值`pixelRatio: 'auto'` |
