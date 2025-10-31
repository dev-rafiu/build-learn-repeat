import { RootState } from "../../store";

// Selector to compute totalTasks directly from tasks array
export const selectTotalTasks = (state: RootState) =>
  state.taskSlice.tasks.length;

// Selector to get all tasks
export const selectTasks = (state: RootState) => state.taskSlice.tasks;
