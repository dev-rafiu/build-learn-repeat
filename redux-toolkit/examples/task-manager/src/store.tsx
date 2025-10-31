import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./slice/task/taskSlice";

export const store = configureStore({
  reducer: {
    taskSlice: tasksReducer,
  },
});

export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
// Inferred type: {tasks: TasksState}
export type AppDispatch = AppStore["dispatch"];
