import { createSlice } from "@reduxjs/toolkit";
import { Task } from "../../definitions";

type TState = {
  tasks: Task[];
};

const initialState: TState = {
  tasks: [],
};

const cartSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask(state, action) {
      state.tasks.push(action.payload);
    },

    deleteTask(state, action) {
      state.tasks.filter((item) => item.id === action.payload);
    },

    clearTasks(state) {
      state.tasks = [];
    },
  },
});

export const { addTask, clearTasks, deleteTask } = cartSlice.actions;

export default cartSlice.reducer;
