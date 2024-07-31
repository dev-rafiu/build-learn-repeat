import { ChevronDown, ChevronUp } from "../icons";

import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  remove,
} from "../slice/cart/cartSlice";

function CartItem({ id, img, title, price, amount }) {
  const dispatch = useDispatch();

  return (
    <article className="cart-item">
      <img src={img} alt={title} />

      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button onClick={() => dispatch(remove(id))} className="remove-btn">
          remove
        </button>
      </div>

      <div>
        <button
          onClick={() => dispatch(increaseQuantity(id))}
          className="amount-btn"
        >
          <ChevronUp />
        </button>

        <p className="amount">{amount}</p>

        <button
          onClick={() => {
            if (amount === 1) {
              dispatch(remove(id));
              return;
            }

            dispatch(decreaseQuantity(id));
          }}
          className="amount-btn"
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
}

export default CartItem;
