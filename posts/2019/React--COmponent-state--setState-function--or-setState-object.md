---
title: 'React class components state: setState(function) or setState(object)?'
description: >-
  React has two ways of setting a local state. The setState() function with
  state object as a parameter, while the second way is setState()…
date: '2018-11-21T13:38:27.354Z'
categories: []
keywords: [react]
slug: >-
  /@nitinj/react-component-state-setstate-function-or-setstate-object-a59d275e45d7
---

React has two ways of setting a local state. The setState() function with state object as a parameter, while the second way is setState() function with function as a parameter. Which one you should use in your code? what’s the benefit of one over other? let’s see.

**First form with state object as a parameter.**

```js
this.setState({    
  someValue: state.somevalue + 1
});
```

The problem with this approach is when you repeatedly call this function, react tries to batch the state update and you might lose some of your updates.

```js
//some code

const someFunc() {  
    //some more code
    setState({myVar: myVar+1});  
    setState({myVar: myVar+1});  
    setState({myVar: myVar+1});  
}
```

In the above code, you may lose some of these updates altogether. this is unsuitable for production and might cause severe hard-to-find bugs.

**The second form is with a function as a parameter.**

```js
this.setState((state, props)=>({    
  someValue: state.somevalue + 1
}));
```

This approach is preferred because even if you call this form frequently, Every update will go thru perfectly. This happens since each time react calls provided function, providing state and getting the new state in return. This new state will be passed as a parameter to the next subsequent function (this is clear from the documentation). This is important if you are making a lot of subsequent updates.

As a thumb rule, you should always use the function form of setState(). This would result in more robust code.

**There is a Gotcha: consider this form handling method**

handleTextChange = event => {

    this.setState(value => ({ value: event.target.value }));

};

for a simple form:

```htnl
<form onSubmit={this.handleSubmit}>

<label>Name:

<input type="text" value={this.state.value}   
onChange={this.handleTextChange} />  
</label>

<button type="submit">Ok</button>

</form>
```

This won’t work!

because react has synthetic events which are reused when it’s handling is done. calling function form of setState will defer evaluation of **event.target.value** in future, where the event may be reused for something else and may not have value at all.

So, correct version would be

```js
handleTextChange = event => {
   const val = event.target.value;
   this.setState(state => ({ value: val }));
};
```

Save the value of target before calling function form of setState and then use it.

Thanks for reading!