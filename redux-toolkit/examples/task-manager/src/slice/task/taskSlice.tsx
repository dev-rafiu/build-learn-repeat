import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../../definitions";

export type TaskState = {
  tasks: Task[];
  totalTasks: number;
};

const initialState: TaskState = {
  tasks: [],
  totalTasks: 0,
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

    getTotalTasks(state) {
      state.totalTasks = state.tasks.length;
    },
  },
});

export const { addTask, clearTasks, deleteTask, getTotalTasks } =
  taskSlice.actions;

export default taskSlice.reducer;
