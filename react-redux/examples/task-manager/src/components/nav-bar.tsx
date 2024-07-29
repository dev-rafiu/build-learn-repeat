/* eslint-disable react-refresh/only-export-components */
import { connect } from "react-redux";
import { TState } from "../store";

function Navbar({ totalItems }: { totalItems: number }) {
  return (
    <nav>
      <div className="nav-center">
        <h3>Redux: </h3>
        <div className="nav-container">
          <p className="total-amount">{totalItems}</p>
        </div>
      </div>
    </nav>
  );
}

function mapStateToProps(state: TState) {
  return { totalItems: state.totalItems };
}

export default connect(mapStateToProps)(Navbar);
