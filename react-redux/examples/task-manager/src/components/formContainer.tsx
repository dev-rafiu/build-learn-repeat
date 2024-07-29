/* eslint-disable react-refresh/only-export-components */
import { FormEvent, useRef } from "react";
import { ADD_TASK } from "../actions";
import { Task } from "../definitions";
import { connect } from "react-redux";
import { Dispatch } from "redux";

function FormContainer({ dispatch }: { dispatch: Dispatch }) {
  const taskInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (
      taskInputRef.current?.value === "" ||
      taskInputRef.current?.value == null
    ) {
      return;
    }

    const newTask: Task = {
      id: new Date().getTime().toString(),
      title: taskInputRef.current?.value,
    };

    dispatch({ type: ADD_TASK, payload: newTask });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input type="text" className="input" ref={taskInputRef} />
      <button type="submit" className="btn">
        save
      </button>
    </form>
  );
}

function mapDispatchToProps(dispatch: Dispatch) {
  return { dispatch };
}

export default connect(mapDispatchToProps)(FormContainer);
