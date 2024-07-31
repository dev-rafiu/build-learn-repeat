import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./slice/task/taskSlice";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});
