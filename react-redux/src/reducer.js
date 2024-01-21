import { INCREASE, DECREASE, RESET } from "./actions";

export function reducer(state, action) {
  if (action.type === INCREASE) {
    return { ...state, count: state.count + 1 };
  }

  if (action.type === DECREASE) {
    return { ...state, count: state.count - 1 };
  }

  if (action.type === RESET) {
    return { ...state, count: 0 };
  }

  return state;
}
