import { useEffect } from "react";

import CartItem from "./CartItem";
import { useShoppingCartStore } from "../../store/useShoppingCartStore";
import CartFooter from "./CartFooter";

const CartContainer = () => {
  const cart = useShoppingCartStore((state) => state.cart);

  useEffect(() => {});

  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>

      {cart.length === 0 ? (
        <h4 className="empty-cart">is currently empty</h4>
      ) : (
        <ul className="cart-items-list">
          {cart.map((item) => {
            return <CartItem key={item.id} {...item} />;
          })}
        </ul>
      )}

      <CartFooter />
    </section>
  );
};

export default CartContainer;
