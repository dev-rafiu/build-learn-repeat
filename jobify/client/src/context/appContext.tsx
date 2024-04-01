/* eslint-disable react-refresh/only-export-components */
import { useReducer, useContext, createContext, ReactNode } from "react";
import reducer from "./reducer";
import { CLEAR_ALERT, DISPLAY_ALERT } from "./actions";

type AppProviderProps = {
  children: ReactNode;
};

type JobContext = {
  displayAlert: () => void;
  clearAlert: () => void;
  isLoading: boolean;
  showAlert: boolean;
  alertText: string;
  alertType: string;
  user: null;
  token: null;
  userLocation: string;
};

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  user: null,
  token: null,
  userLocation: "",
};

const AppContext = createContext({} as JobContext);

const AppProvider = ({ children }: AppProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };

  return (
    <AppContext.Provider value={{ ...state, displayAlert, clearAlert }}>
      {children}
    </AppContext.Provider>
  );
};

// custom hook
const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
