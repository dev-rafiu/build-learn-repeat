import { useAppSelector } from "../hooks";
import { selectTotalTasks } from "../slice/task/taskSelectors";

function Navbar() {
  const totalTasks = useAppSelector(selectTotalTasks);

  return (
    <nav>
      <div className="nav-center">
        <h3>Redux Tk: (Task manager example)</h3>
        <div className="nav-container">
          <p className="total-amount">{totalTasks}</p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
