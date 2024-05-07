# LEARN ZUSTAND

After installing zustand,first create a store:

`import { create } from 'zustand`

```js
const useStore = create((set) => ({
  count: 0,
}));
```

Then bind your components by using the `useStore` hook created above. That's all at the basic level

```js
function BearCounter() {
  const counts = useStore((state) => state.count);

  return <h1>{counts} counts</h1>;
}
```
