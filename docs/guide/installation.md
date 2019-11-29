---
title: 安装
type: guide
---

## 直接用`script`引入
  如果您使用的是简单的HTML环境，可以直接下载文件并用 `<script>` 引入。`cytoscape` 会被注册为一个全局变量。

## 使用原生 ES Modules
```javascript
<script type="module">
  import cytoscape from "./cytoscape.esm.min.js";
</script>
```

## 使用npm
```javascript
npm install -S cytoscape

import cytoscape from 'cytoscape'
```

## 不同的构建版本
在 [`NPM` 包的 `dist/` 目录](https://github.com/cytoscape/cytoscape.js/tree/master/dist)下你将会找到很多不同的 Vue.js 构建版本。这里列出了它们之间的差别：
`cytoscape.min.js` : 一个包含包中所有依赖项的缩小UMD构建。这个文件对构建小型网页很有用，例如学术论文的补充材料。
cytoscape.umd.js : A non-minified UMD build with all dependencies included in the bundle. This file is useful for debugging on small pages, supplementary material for an academic paper for example.
cytoscape.esm.min.js : A minified ESM (import / export) build with all dependencies included in the bundle. This file serves the same purpose as the above, but it can be imported as an ES6 module without the need for a bundler.
cytoscape.cjs.js : A non-minified CJS (Node.js) build without any bundled dependencies. This is intended to be consumed automatically by Node.js or a bundler like Webpack via require('cytoscape').
cytoscape.esm.js : A non-minified ESM (import / export) build without any bundled dependencies. This is intended to be consumed automatically by Node.js or a bundler like Webpack via import cytoscape from 'cytoscape'.