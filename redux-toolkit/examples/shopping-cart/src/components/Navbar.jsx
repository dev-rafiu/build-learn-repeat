import { CartIcon } from "../icons";
import { useSelector } from "react-redux";

function Navbar() {
  const { quantity } = useSelector((store) => store.cart);

  return (
    <nav className="">
      <div className="nav-center">
        <h3>redux toolkit</h3>

        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{quantity}</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
