/* eslint-disable react-refresh/only-export-components */
import { connect } from "react-redux";
import { Task, TState } from "../definitions";
import { useEffect } from "react";
import { GET_TOTALS } from "../actions";
import { Dispatch } from "redux";

function Navbar({
  totalItems,
  tasks,
  dispatch,
}: {
  tasks: Task[];
  totalItems: number;
  dispatch: Dispatch;
}) {
  useEffect(() => {
    dispatch({ type: GET_TOTALS });
  }, [tasks]);

  return (
    <nav>
      <div className="nav-center">
        <h3>Redux: (Task manager example)</h3>
        <div className="nav-container">
          <p className="total-amount">{totalItems}</p>
        </div>
      </div>
    </nav>
  );
}

function mapStateToProps(state: TState) {
  return { tasks: state.taskList, totalItems: state.totalItems };
}

export default connect(mapStateToProps)(Navbar);
