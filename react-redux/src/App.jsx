// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";

// items
import cartItems from "./cart-items";
import { Provider } from "react-redux";

// redux stuff
import { createStore } from "redux";

// reducer
import { reducer } from "./reducer";

// initial store
const initialState = {
  cart: cartItems,
  totalAmount: 0,
  totalItems: 0,
};

export const store = createStore(reducer, initialState);

function App() {
  // cart setup
  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
