// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff

import {createStore} from 'redux'

// initial store
const initialState={
  count:5
}
// reducer
// eslint-disable-next-line no-unused-vars
function reducer(state,action){
  return state
}
const store =createStore(reducer,initialState)
console.log(store.getState());

function App() {
  // cart setup

  return (
    <main>
      <Navbar cart={store.getState()} />
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;