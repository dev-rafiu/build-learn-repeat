/* eslint-disable react-refresh/only-export-components */
import React, { FormEvent, useRef } from "react";
import { Task } from "../definitions";

function FormContainer() {
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
