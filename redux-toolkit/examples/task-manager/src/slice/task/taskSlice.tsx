import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../../definitions";

export type State = {
  tasks: Task[];
};

const initialState: State = {
  tasks: [],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask(state, action) {
      // state.tasks.push(action.payload);

      return { ...state, tasks: [...state.tasks, action.payload] };
    },

    deleteTask(state, action: PayloadAction<string>) {
      // state.tasks = state.tasks.filter((item) => item.id == action.payload);

      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id != action.payload),
      };
    },

    clearTasks(state) {
      state.tasks = [];
    },
  },
});

export const { addTask, clearTasks, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;
