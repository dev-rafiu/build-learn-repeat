import { CartIcon } from "../../icons";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const { quantity } = useSelector((store) => store.cart);

  return (
    <nav className="">
      <div className="nav-center">
        <h3>redux toolkit</h3>

        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-quantity">{quantity}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};
