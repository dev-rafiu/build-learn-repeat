# react-redux

## main concepts (`store`, `reducer` , `action`)

- import `createStore` from `redux`

- initialize `createStore` with two arguments (reducer and initial state)

- import `Provider` from `react-redux` , this wraps our app and makes store available to
  entire application making the store available globally.

```js
// reducer
function reducer(state, action) {
  //state references initialState passed to store

  return state; // always return state
}

// initial state
const initialState = {};

// store
const store = createStore(reducer, initialState);
store.dispatch({ type: "" }); //dispatches an action
```

- `reducer` function takes two args(state-current state and action-object), returns a new state based on the action type.

- get `action` using `action.type`

- use `dispatch` to create an action
