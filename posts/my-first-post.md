---
title: 'First Post'
date: '2020-01-01'
---

* With each new  **state** update with setState(), functional component is called again. All the event handlers and effects are re-created for that particular render and can only see state from their own render.

* **Effects** run only **after** render is done by react and screen is painted with values only from that render.

  - **React:** Give me the UI when the state is `0`.
  - **Your component:**
    - Here’s the render result: `You clicked 0 times`.
    - Also remember to run this effect after you’re done: `() => { document.title = 'You clicked 0 times' }`.
  - **React:** Sure. Updating the UI. Hey browser, I’m adding some stuff to the DOM.
  - **Browser:** Cool, I painted it to the screen.
  - **React:** OK, now I’m going to run the effect you gave me.
    - Running `() => { document.title = 'You clicked 0 times' }`.

* **Effects cleanup:**

  For code (id 10 updated to id 20)

  ```jsx
  useEffect(() => {
      ChatAPI.subscribeToFriendStatus(props.id, handleStatusChange);
      return () => {
        ChatAPI.unsubscribeFromFriendStatus(props.id, handleStatusChange);
      };
    });
  ```

  React renders UI for {id: 20}.
  The browser paints. We see the UI for {id: 20} on the screen.
  React cleans up the effect for {id: 10} by calling effect cleanup from previous render
  React runs the effect for {id: 20} within this render

* *Mutations, subscriptions, timers, logging, and other side effects are not allowed inside the main body of a function component (referred to as React’s* *render phase**). Doing so will lead to confusing bugs and inconsistencies in the UI.* Dont do any of it in FC directly - do it in hooks.

* 

#### Init expensive state/ref only once, lazily.

```
function Table(props) {
  // ⚠️ createRows() is called on every render
  const [rows, setRows] = useState(createRows(props.count));
  // ...
}
```

```
function Table(props) {
  // ✅ createRows() is only called once
  const [rows, setRows] = useState(() => createRows(props.count));
  // ...
}
```

```
function Image(props) {
  const ref = useRef(null);

  // ✅ IntersectionObserver is created lazily once
  function getObserver() {
    if (ref.current === null) {
      ref.current = new IntersectionObserver(onIntersect);
    }
    return ref.current;
  }

  // When you need it, call getObserver()
  // ...
}
```



#### Cancel/disable previous unfinished request in effect due to prop/state change

```javascript
 useEffect(() => {
    let processResult = true;
    async function fetchProduct() {
      const response = await fetch('http://myapi/product/' + productId);
      const json = await response.json();
      if (processResult) setProduct(json);
    }

    fetchProduct();
    return () => { processResult = false };
  }, [productId]);
```



## Problems with hooks

* **useEffect hook uses Object.is()** for comparison of dependencies. It works well for primitive types but not for objects and arrays with deep children. No way to override this or use custom comparator.
  Custom hooks like [use-deep-object-compare](https://github.com/kentcdodds/use-deep-compare-effect) can be the solution.
