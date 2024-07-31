import { useDispatch, useSelector } from "react-redux";
import { Task } from "../definitions";
import { clearTasks, deleteTask } from "../slice/task/taskSlice";

function TaskList() {
  const { tasks } = useSelector((store) => store.tasks);
  const dispatch = useDispatch();

  return (
    <div className="task-list-wrapper">
      <ul className="task-list">
        {tasks.map((task: Task) => {
          const { id, title } = task;

          return (
            <li key={id} className="list">
              <span>{title}</span>

              <button
                onClick={() => dispatch(deleteTask(id))}
                className="remove-btn btn"
              >
                remove
              </button>
            </li>
          );
        })}
      </ul>

      <button onClick={() => dispatch(clearTasks())} className="clear-btn">
        Clear list
      </button>
    </div>
  );
}

export default TaskList;
