import { TCartItem } from "../../libs/definitions";
import { DecreaseQuantity, IncreaseQuantity } from "../QuantityButtons";

const CartItem = ({ img, title, price, quantity }: TCartItem) => {
  return (
    <li className="cart-item">
      <img src={img} alt={title} />

      <div>
        <h4>{title}</h4>
        <p className="item-price">${price}</p>
        <button className="remove-btn">remove</button>
      </div>

      <div>
        <IncreaseQuantity />
        <p className="quantity">{quantity}</p>
        <DecreaseQuantity />
      </div>
    </li>
  );
};

export default CartItem;
