---
title: Quickly start a Hot-reloaded web  project with ParcelJS
description: >-
  Want to start a quick Web/HTML+SASS+HTML modules project with auto reload? You
  don't have to fiddle with…
date: '2019-01-26T06:21:40.127Z'
categories: []
keywords: []
slug: /@nitinj/quickly-start-a-hot-reloaded-web-project-with-parceljs-52e4d3afb404
---

![](img\0__sTbgxMusvyK1nn9u.png)

Want to start a quick Web/HTML+SASS+HTML modules project with auto reload? You don't have to fiddle with nodemon/local-server/webpack/other such tools anymore!

ParcelJS is the new module bundler that out of the box supports everything (well, almost everything) with no config at all. With Parcel, you not only get a zero-config auto-reloading local dev server but much more out of the box:

*   Hot module reloading, obviously
*   SASS, postCSS, postHTML, Stylus
*   Code splitting using JS dynamic import
*   And much more!11!!1!

here is how to get started:

*   Create a new directory “my-project” and insider it, start new npm project using

npm init -y

*   Create index.html file in this directory with some content

```html
<html><body>  <script src="./index.js"></script></body></html>
```

…and JS file

console.log("js here");

*   Add parcel to the mix

```bash
npm install -g parcel-bundler
```

(you can also add parcel globally if you don't want it in your package.json)

*   Start project

parcel index.html

This will start a hot-reload web server and open index.html in the browser.

*   Add SASS to project

```bash
npm install sass --save-dev
```

Now you can use sass files as usual.

Don't forget to import sass file in your index.js file:

import "./styles.scss";

*   You can create various HTML files for say, header, footer etc and include those with

<include src="./src/header.html"></include>

But for this to work, you have to add postHTML support:

npm install posthtml-include --save-dev

…and create a **.posthtmlrc.js** in the project root directory with content:

```json
module.exports = {  
  plugins: {  
    "posthtml-include": {  
      root: \_\_dirname  
    }  
  }  
};
```

*   For optimized production bundle, run

parcel build index.html

All set. Enjoy a fully functional, hot-reloaded web project with all the goodies!