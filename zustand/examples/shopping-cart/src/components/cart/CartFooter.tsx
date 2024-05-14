import { useShoppingCartStore } from "../../store/useShoppingCartStore";

function CartFooter() {
  const totalAmount = useShoppingCartStore((state) => state.totalAmount);
  const cart = useShoppingCartStore((state) => state.cart);
  const clearCart = useShoppingCartStore((state) => state.clearCart);

  return (
    <>
      {cart.length > 0 && (
        <footer className="cart-footer">
          <hr />
          <div className="cart-total">
            <h4>total</h4>
            <h4>{totalAmount()}</h4>
          </div>
          <button onClick={clearCart} className="btn clear-btn">
            clear cart
          </button>
        </footer>
      )}
    </>
  );
}

export default CartFooter;
