import React from "react";

function TaskList() {
  const tasks = [];

  return (
    <div className="task-list-wrapper">
      <ul className="task-list">
        {tasks.map((task) => {
          const { id, title } = task;

          return (
            <li key={id} className="list">
              <span>{title}</span>
              <button onClick={() => {}} className="remove-btn btn">
                remove
              </button>
            </li>
          );
        })}
      </ul>

      <button onClick={() => {}} className="clear-btn">
        Clear list
      </button>
    </div>
  );
}

export default TaskList;
