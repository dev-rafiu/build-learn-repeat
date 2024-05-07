import { useShoppingCartStore } from "../../store/useShoppingCartStore";

function CartFooter() {
  const totalAmount = useShoppingCartStore((state) => state.totalAmount);

  return (
    <footer className="cart-footer">
      <hr />
      <div className="cart-total">
        <h4>total</h4>
        <h4>{totalAmount}</h4>
      </div>
      <button className="btn clear-btn">clear cart</button>
    </footer>
  );
}

export default CartFooter;
