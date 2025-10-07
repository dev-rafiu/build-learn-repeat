import { useDispatch } from "react-redux";
import { ChevronDown, ChevronUp } from "../../icons";

import {
  decreaseQuantity,
  increaseQuantity,
  remove,
} from "../../slice/cart/cartSlice";

export const CartItem = ({ id, img, title, price, quantity }) => {
  const dispatch = useDispatch();

  const handleDecreaseQuantity = (quantity, id) => {
    if (quantity == 1) {
      dispatch(remove(id));
      return;
    }

    dispatch(decreaseQuantity(id));
  };

  return (
    <article className="cart-item">
      <img src={img} alt={title} />

      <div className="">
        <h4 id="title">{title}</h4>
        <h5 className="item-price">${price}</h5>
        <button onClick={() => dispatch(remove(id))} className="remove-btn">
          remove
        </button>
      </div>

      <div className="">
        <button
          onClick={() => dispatch(increaseQuantity(id))}
          className="quantity-btn"
        >
          <ChevronUp />
        </button>

        <span className="quantity">{quantity}</span>

        <button
          onClick={() => handleDecreaseQuantity(quantity, id)}
          className="quantity-btn"
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};
