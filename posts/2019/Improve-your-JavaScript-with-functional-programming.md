---
title: Improve your JavaScript with functional programming
description: >-
  If you want to write your JavaScript code in a better way, one of the most
  effective techniques is functional programming (FP). It’s no…
date: '2019-07-31T08:35:33.614Z'
categories: []
keywords: []
slug: /@nitinj/improve-your-javascript-with-functional-programming-7c1068862104
---

If you want to write your JavaScript code in a better way, one of the most effective techniques is functional programming (FP). It’s no difficult than the language itself — don’t let anyone else tell you otherwise. This series will have multiple posts.

### Use Pure functions

A pure function is one which

1.  Does not access anything else other than provided arguments.
2.  Does not modify anything outside of a function. It may return the calculated value based on arguments. This means that they will always return the same output when provided with the same input.

#### Example of pure function

```js
function calculateArea = (radius) => 3.14 * radious * radius;
```

### Use `map()` instead of `for/forEach` for array conversions

(you are probably already doing this)

Process and covert an array into a new array using `for/forEach`

```js
const nums = [1,2,3,4,5,6];
const doubles = [];
for(let i = 0; i < nums.length; i++){  
  doubles.push(nums[i] * 2);
  }// nums.forEach(item => doubles.push(item * 2)); // foreach versionconsole.log(doubles)
```

Instead, you should be using `map()` function (which is built-in in JavaScipt)

```js
const nums = [1,2,3,4,5,6];
const doubles = nums.map(item => item * 2);
console.log(doubles)
```

#### Why use the `map()` instead of the above methods?

*   The code is almost human-readable (“map this array to that with function x”), easy to understand
*   It’s minimalistic, uses fewer keystrokes, hence fewer potential bugs
*   Its faster than other versions

### Use `reduce()` instead of for loop for additive calculations

If you want to calculate something which depends on every value of array, use `reduce()` function. e.g. you need to add up every element of an array.

`for/forEach` method:

```js
const array1 = [1, 2, 3, 4];
let sum = 0;
for(let i=0; i< array1.length; i++){  
  sum+=array1[i];
}// array1.forEach(item => sum+= item); //forEach version
```

```js
// 1 + 2 + 3 + 4console.log(sum);
```

```js
const array1 = [1, 2, 3, 4];
const sum = array1.reduce((sum, current) => sum+current, 0);
```

```js
// 1 + 2 + 3 + 4console.log(sum);
```

#### Why use the `reduce()` instead of the above methods?

*   less boilerplate than for loop
*   A common construct, much cleaner to read
*   can be chained with other array functions like map: `array1.map(i => i*2).reduce((sum, current) => sum+current)`

### use filter() method for array filter operations:

Filtering array with for loop for even numbers:

```js
const array1 = [1, 2, 3, 4];
```

```js
const evenArray1 = [];
for(let i = 0; i<array1.length; i++){  
  if(array1[i] % 2 === 0){    
    evenArray1.push(array1[i]); 
  }
}
//copy only even elements console.log(evenArray1);
```

#### User `filter()` method instead:

```js
const array1 = [1, 2, 3, 4];
```

```js
const evenArray1 = array1.filter(item => item % 2 === 0);
console.log(evenArray1);
```

### Use `every()` and `some()` instead of manual search with for loops

Checking if all items in an array satisfy certain criteria (even)

```js
const array1 = [2,4,8];
```

```js
let isAllEven = true;
for(let i = 0; i<array1.length; i++){  
  if(array1[i] % 2 !== 0){
        isAllEven = false;
        break;
  }
}
console.log(isAllEven);
```

Use `every()` for the same:

```js
const array1 = [2,4,8, 3];
```

```js
let isAllEven = array1.every(item => item % 2 === 0);
console.log(isAllEven);
```

Checking if at least one item in an array satisfy certain criteria (even)

```js
const array1 = [1, 3];
```

```js
let isAtleastOneEven = false;
for(let i = 0; i<array1.length; i++){
  if(array1[i] % 2 === 0){
    isAtleastOneEven = true;
    break;
  }
}
console.log(isAtleastOneEven);
```

Use `some()` for the same:

```js
const array1 = [1, 2, 3];
```

```js
let isAtleastOneEven =  array1.some(item => item % 2 ===0);
console.log(isAtleastOneEven);
```

### Use Partial functions to create new functions from existing functions using `bind()`

You can derive new functions from existing functions. E.g. you have a power function that calculates the power of number.

```js
const power = (p, num) => num ** p;
```

you can create a new function `square()` and `cube()` that uses an existing function

```js
const square = power.bind(null, 2);
const cube = power.bind(null, 3);
```

```js
console.log(square(5))  // 25
console.log(cube(5))  // 125
```

In the next article, we will discuss some of the advanced functional programming concepts. Thanks!