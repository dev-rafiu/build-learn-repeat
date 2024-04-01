/* eslint-disable @typescript-eslint/no-explicit-any */
import { CLEAR_ALERT, DISPLAY_ALERT } from "./actions";

type Action = {
  type: string;
  payload?: unknown;
};

const reducer = (state: any, action: Action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: "danger",
      alertText: "Please provide all values!",
    };
  }

  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: "",
      alertText: "",
    };
  }

  throw new Error(`no such action: ${action.type}`);
};

export default reducer;
