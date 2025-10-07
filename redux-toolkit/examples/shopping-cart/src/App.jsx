import { useEffect } from "react";
import { CartContainer } from "./components/cart-container";
import { Navbar } from "./components/navbar";
import { calculateTotal, setCartFromProducts } from "./slice/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "./components/Modal";
import { useGetProductsQuery } from "./services/productsApi";

function App() {
  const { cart } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.modal);

  const { data: productsData, isLoading: isProductsLoading } =
    useGetProductsQuery();

  const dispatch = useDispatch();

  useEffect(() => {
    if (productsData?.products && !isProductsLoading) {
      const selectedProducts = productsData.products;
      dispatch(setCartFromProducts(selectedProducts));
    }
  }, [productsData, isProductsLoading, dispatch]);

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cart]);

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
