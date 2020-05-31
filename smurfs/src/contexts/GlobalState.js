import React from "react";
import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  editing: false,
  isFetching: true,
  error: "",
  smurfs: [],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  const fetchSuccess = (newState) => {
    dispatch({
      type: "FETCH_SUCCESS",
      payload: newState,
    });
  };

  const fetchError = (error) => {
    dispatch({
      type: "FETCH_ERROR",
      payload: `Error ${error.response.status}: ${error.response.data} `,
    });
  };

  const editing = () =>
    dispatch({
      type: "EDITING",
    });

  return (
    <GlobalContext.Provider
      value={{
        fetchSuccess,
        fetchError,
        state,
        editing,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
