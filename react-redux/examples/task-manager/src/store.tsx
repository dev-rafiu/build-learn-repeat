import { createStore } from "redux";
import { TState } from "./definitions";
import { reducer } from "./reducer";

export const initialState: TState = {
  taskList: [],
  totalItems: 0,
};

export const store = createStore(reducer, initialState);
