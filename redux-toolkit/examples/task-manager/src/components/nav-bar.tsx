import { useSelector } from "react-redux";

function Navbar() {
  const { totalTasks } = useSelector((store) => store.tasks);

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
