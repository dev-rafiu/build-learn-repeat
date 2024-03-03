import { DISPLAY_ALERT } from "./actions";

type Action = {
  type: string;
  payload?: unknown;
};

type State = {
  isLoading: boolean;
  showAlert: boolean;
  alertText: string;
  alertType: string;
};

const reducer = (state: State, action: Action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: "danger",
      alertText: "Please provide all values!",
    };
  }
  throw new Error(`no such action: ${action.type}`);

  return state;
};

export default reducer;
