import { connect } from "react-redux";
import { Task, TState } from "../definitions";
import { Dispatch } from "redux";
import { CLEAR_LIST, REMOVE_TASK } from "../actions";

function TaskList({ tasks, dispatch }: { tasks: Task[]; dispatch: Dispatch }) {
  return (
    <div className="task-list-wrapper">
      <ul className="task-list">
        {tasks.map((task) => {
          const { id, title } = task;

          return (
            <li key={id} className="list">
              <span>{title}</span>
              <button
                onClick={() =>
                  dispatch({ type: REMOVE_TASK, payload: { id: task.id } })
                }
                className="remove-btn btn"
              >
                remove
              </button>
            </li>
          );
        })}
      </ul>

      <button
        onClick={() => dispatch({ type: CLEAR_LIST })}
        className="clear-btn"
      >
        Clear list
      </button>
    </div>
  );
}

const mapStateToProps = (state: TState) => {
  return { tasks: state.taskList };
};

const connector = connect(mapStateToProps);
const ConnectedTaskList = connector(TaskList);

export default ConnectedTaskList;
