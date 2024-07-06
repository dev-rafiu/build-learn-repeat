// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";

// redux stuff
import { Provider } from "react-redux";

// store
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
