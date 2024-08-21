/* eslint-disable react-refresh/only-export-components */
import { FormEvent, useRef } from "react";
import { addTask } from "../slice/task/taskSlice";
import { Task } from "../definitions";
import { useAppDispatch } from "../hooks";

function FormContainer() {
  const taskInputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (
      taskInputRef.current?.value == "" ||
      taskInputRef.current?.value == null
    ) {
      return;
    }

    const newTask: Task = {
      id: new Date().getTime().toString(),
      title: taskInputRef.current?.value,
    };
    dispatch(addTask(newTask));

    taskInputRef.current.value = "";
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

export default FormContainer;
