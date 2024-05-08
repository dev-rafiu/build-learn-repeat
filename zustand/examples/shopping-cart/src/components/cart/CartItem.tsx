import { TCartItem } from "../../libs/definitions";
import { useShoppingCartStore } from "../../store/useShoppingCartStore";
import { DecreaseQuantity, IncreaseQuantity } from "../QuantityButtons";

const CartItem = ({ id, img, title, price, quantity }: TCartItem) => {
  const removeItem = useShoppingCartStore((state) => state.removeItem);

  return (
    <li className="cart-item">
      <img src={img} alt={title} />

      <div>
        <h4>{title}</h4>
        <p className="item-price">${price}</p>
        <button onClick={() => removeItem(id)} className="remove-btn">
          remove
        </button>
      </div>

      <div>
        <IncreaseQuantity id={id} />
        <p className="quantity">{quantity}</p>
        <DecreaseQuantity id={id} />
      </div>
    </li>
  );
};

export default CartItem;
