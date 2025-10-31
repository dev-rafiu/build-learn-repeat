import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../slice/task/taskSlice";

export const createTestStore = (initialState = {}) => {
  return configureStore({
    reducer: {
      taskSlice: tasksReducer,
    },
    preloadedState: initialState,
  });
};
