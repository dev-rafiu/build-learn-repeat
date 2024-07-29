import { connect } from "react-redux";
import { Task, TState } from "../definitions";

function TaskList({ tasks }: { tasks: Task[] }) {
  return (
    <ul className="task-list">
      {tasks.map((task) => {
        const { id, title } = task;
        return <li key={id}>{title}</li>;
      })}
    </ul>
  );
}

const mapStateToProps = (state: TState) => {
  return { tasks: state.taskList };
};

const connector = connect(mapStateToProps);
const ConnectedTaskList = connector(TaskList);

export default ConnectedTaskList;
