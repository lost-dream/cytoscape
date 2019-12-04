---
title: 安装
type: guide
---

## 直接用`script`引入

  如果您使用的是简单的HTML环境，可以直接下载文件并用 `<script>` 引入。`cytoscape` 会被注册为一个全局变量。

## 使用原生 ES Modules引入

```javascript
<script type="module">
  import cytoscape from "./cytoscape.esm.min.js";
</script>
```

## 使用npm引入

```javascript
npm install -S cytoscape

import cytoscape from 'cytoscape'
```

## 不同的构建版本

在 [`NPM` 包的 `dist/` 目录](https://github.com/cytoscape/cytoscape.js/tree/master/dist)下你将会找到很多不同的 Vue.js 构建版本。这里列出了它们之间的差别：

+ `cytoscape.min.js`: 压缩过的包含所有依赖的UMD包。这个文件对构建小型网页很有用，例如学术论文的补充材料。
+ `cytoscape.umd.js`: 未压缩的包含所有依赖的UMD包。该文件可用于调试小页面，例如用于学术论文的补充材料。
cytoscape.esm.min.js : 压缩过的ESM(ES Module,可以`import / export`)包，包含捆绑包中所有依赖项。该文件的用途与上述相同，但是可以将其作为ES6模块导入，而无需使用捆绑程序。
cytoscape.esm.js : 未压缩过的ESM（ES Module,可以`import / export`）包，不包含任何依赖，由Node.js或者webpack的捆绑器自动引用`import cytoscape from 'cytoscape'`.
cytoscape.cjs.js : 未压缩过的CJS(Node.js)包,未包含任何依赖，它由Node.js或类似webpack的捆绑器自动引用`require('cytoscape')`.

<p class="tips">Cytoscape.js基于HTML中DOM元素的尺寸进行布局和渲染。因此，请将CSS样式存放在<code>head</code>标签中，保证代码在任何Cytoscape.js相关代码之前生效。否则，可能会错误的计算尺寸，导致错误。</p>

样式表应该包含以下内容（假定使用ID为`cy`的DOM元素作为容器）：

```css
#cy {
  width: 300px;
  height: 300px;
  display: block;
}
```

## 使用

+ 在带有npm的ESM环境中使用：

```javascript
import cytoscape from 'cytoscape'
```

+ 在Node.js之类的CommonJS环境中使用：

```javascript
const cytoscape = require('cytoscape')
```

+ 在AMD / Require.js中使用

```javascript
require(['cytoscape'], function(cytoscape) {
  // ...
})
```

<p class="tips">Cytoscape.js由Babel编译并支持ES5或更高版本的环境，并且仅使用标准库的基本功能。功能检测用于提高性能的可选功能。但是，将来的Cytoscape.js版本可能需要标准库的最新版本。您可能要使用<a href="https://babeljs.io/docs/en/babel-polyfill/">babel-polyfill</a>或者<a href="https://github.com/zloirock/core-js">core-js</a>来要支持旧的浏览器。</p>
