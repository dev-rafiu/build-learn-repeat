import { initialState } from "./store";
import { ADD_TASK, CLEAR_LIST, REMOVE_TASK, GET_TOTALS } from "./actions";
import { Task, TState } from "./definitions";

export interface AddTaskAction {
  type: typeof ADD_TASK;
  payload: Task;
}

export interface RemoveTaskAction {
  type: typeof REMOVE_TASK;
  payload: { id: number };
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
    console.log(action.payload);
    // console.log(state);

    return { ...state, taskList: [...state.taskList, action.payload] };
  }

  if (action.type === REMOVE_TASK) {
    console.log("remove task");
  }

  if (action.type === CLEAR_LIST) {
    console.log("clear list");
  }

  if (action.type === GET_TOTALS) {
    console.log("get total");
  }

  return state;
}
