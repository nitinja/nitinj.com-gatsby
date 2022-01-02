---
title: CSS-Only Stylish Checkboxes and Radios
description: >-
  I recently struggled with styling checkboxes and radios with CSS. While I
  could use libraries like iCheck, I wanted to avoid Javascript and…
date: '2017-05-25T04:58:41.284Z'
categories: []
keywords: []
slug: /@nitinj/css-only-stylish-checkboxes-and-radios-d66de5a9e57a
---

I recently struggled with styling checkboxes and radios with CSS. While I could use libraries like [iCheck](http://icheck.fronteed.com), I wanted to avoid Javascript and jQuery. Why add another library to application just for the sake of visual styles?

Here is my implementation of CSS-Only solution to this problem.

Check Live [Demo](http://nitinj.com/code-experiments/css-examples-experiments/stylish-checkboxes-radios.html)

![Checkboxes and radio buttons after styling](img\1__lX__0tV8XirZimtkrany__Rw.png)
Checkboxes and radio buttons after styling

It's easy:

Create a plain checkbox in this format:

```html
<div class='example'>  
    <input type='checkbox' id='my-checkbox' >  
    <label for='my-checkbox' >My Checkbox</label >  
</div >  
<div class='example' >  
    <input type='radio' name='radio-group-1' id='my-radio1' >  
    <label for='my-radio1' >My Radio 1</label >  
    <input type='radio' name='radio-group-1' id='my-radio2' >  
    <label for='my-radio2' >My Radio 1</label >  
</div >
```

![regular checkbox and radio buttons](img\1__iv3puCn6maIPkuCtqWRq1Q.png)
regular checkbox and radio buttons

Apply following CSS styles. I have added comments with each style, it should be self explanatory.

Here is full example:

```css
/* Hide the checkbox/radio. We will simulate it later using label */  
input[type=checkbox], input[type=radio] {  
    opacity: 0;  
    position: absolute;  
}  
  
/* Some basic styling for alignment and more */  
input[type=checkbox], input[type=checkbox] + label, input[type=radio], input[type=radio] + label {  
    display: inline-block;  
    vertical-align: middle;  
    cursor: pointer;  
    user-select: none;  
}  
  
/* CSS Pseudo class "before" to show checkbox/radio box. Will be attached to every label adjacent to input checkbox.*/  
input[type=checkbox] + label:before, input[type=radio] + label:before {  
    font-family: 'FontAwesome';  
    background: #f1fff6;  
    display: inline-block;  
    vertical-align: middle;  
    width: 20px;  
    margin-right: 10px;  
    text-align: center;  
    font-size: 12px;  
    padding: 4px 0;  
    color: #e4efe5;  
    transition: color .4s;  
    border: 1px solid #3faf2d;  
}  
  
/* Tick inside checkbox. I am using Font-awesome's tick, but you can use plain unicode tick */  
/* or any other symbol you want. */  
input[type=checkbox] + label:before {  
    content: '\\f00c';  
    border-radius: 2px;  
}  
  
/* Circle inside radio circle. Border-radius to make it a circle. */  
input[type=radio] + label:before {  
    content: '\\f111';  
    border-radius: 50%;  
}  
  
/* Styles when checkbox/radio is checked */  
input:checked \+ label:before {  
    background: #288619;  
    color: #FFF;  
}  
  
/* Styles when checkbox/radio is disabled  */  
input[type=checkbox][disabled] + label:before, input[type=radio][disabled] + label:before {  
    color: #d0d0d0;  
    background: #bfbfbf;  
    border: 1px solid #656b64;  
}
```

It works with most modern browsers, including IE9+ (tested in IE11, but should work in IE9)

Credit goes to multiple posts on stackoverflow as well as many blog posts.

Steal this code at your own Peril!