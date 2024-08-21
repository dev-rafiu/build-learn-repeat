import { useAppSelector } from "../hooks";

function Navbar() {
  const { totalTasks } = useAppSelector((store) => store.tasks);

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
