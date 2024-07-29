import { initialState } from "./store";
import { ADD_TASK, CLEAR_LIST, REMOVE_TASK, GET_TOTALS } from "./actions";
import { Task, TState } from "./definitions";

export interface AddTaskAction {
  type: typeof ADD_TASK;
  payload: Task;
}

export interface RemoveTaskAction {
  type: typeof REMOVE_TASK;
  payload: { id: string };
}

export interface ClearListAction {
  type: typeof CLEAR_LIST;
}

export interface GetTotalsAction {
  type: typeof GET_TOTALS;
}

export type ActionTypes =
  | AddTaskAction
  | RemoveTaskAction
  | ClearListAction
  | GetTotalsAction;

export function reducer(
  state: TState = initialState,
  action: ActionTypes
): TState {
  if (action.type == ADD_TASK) {
    return { ...state, taskList: [...state.taskList, action.payload] };
  }

  if (action.type === REMOVE_TASK) {
    const filteredTasks = state.taskList.filter((item) => {
      return item.id !== action.payload.id;
    });
    return { ...state, taskList: filteredTasks };
  }

  if (action.type === CLEAR_LIST) {
    return { ...state, taskList: [] };
  }

  if (action.type === GET_TOTALS) {
    return { ...state, totalItems: state.taskList.length };
  }

  return state;
}
