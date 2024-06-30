# React code splitting

Code splitting: splitting react apps into parts and load only when needed,
by default the entire app gets loaded all at once which can result in longer load time.

In other to code split our code we use a dynamic import(only import code when it's been used),
the dynamic import returns a promise which then resolves to a module.

## import()

The best way to introduce code-splitting into your app is through the dynamic import() syntax.

### before

```js
import sum from "./sum";

<button onClick={() => alert(sum(2, 2))}>add 2+2</button>;
```

### after

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

## React.lazy

React lazy defers a component's code until it is rendered for the first time.

## before

```js
import SomeComponent from "./Path";
```

## after

```js
const SomeComponent = React.lazy(() => import("./path"));
```

`React.lazy` takes a function that must call a dynamic import(). This must return a Promise which resolves to a module with a default export containing a React component. ({default:ReactComponent})

The lazy component should then be rendered inside a Suspense component, which allows us to show some fallback content (such as a loading indicator) while we’re waiting for the lazy component to load.

```js
import React, { Suspense } from "react";

const OtherComponent = React.lazy(() => import("./OtherComponent"));

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </Suspense>
    </div>
  );
}
```

NB: React.lazy currently only supports default exports. If the module you want to import uses named exports, you can create an intermediate module that reexports it as the default. This ensures that tree shaking keeps working and that you don’t pull in unused components.

```js
// ManyComponents.js
export const MyComponent = /* ... */;
export const MyUnusedComponent = /* ... */;
```

```js
// MyComponent.js
export { MyComponent as default } from "./ManyComponents.js";
```

```js
import React, { lazy } from "react";

const MyComponent = lazy(() => import("./MyComponent.js"));
```

## or

```js
import React, { lazy } from "react";

const MyComponent = lazy(() =>
  import("./MyComponent.js").then((module) => ({
    default: module.ComponentName,
  }))
);
```
