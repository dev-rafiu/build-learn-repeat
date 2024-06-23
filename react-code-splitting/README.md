# React code splitting

Code splitting: splitting react apps into parts and load only when needed,
by default the entire app gets loaded all at once which can result in longer load time.

In other to code split something we use a dynamic import(only import code when it's been used).
The dynamic import returns a promise which then gives us access to module object, if what is imported is a default export we use `module.default`, if it's not we replace `default` with the named export

Without code splitting

```js
import sum from "./src/sum.tsx";
```

```js
<button onClick={() => alert(sum(2, 2))}>add 2+2</button>
```

With code splitting

```js
<button
  onClick={() => {
    import("../sum.tsx").then((module) => {
      alert(module.sum(2, 2));
    });
  }}
>
  add 2+2
</button>
```

Here we are importing a sum function that takes two args and alerts the result when the button is clicked
