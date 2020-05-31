import React from "react";
import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  editing: false,
  loading: true,
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
      payload: error,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        smurfs: state.smurfs,
        fetchSuccess,
        fetchError,
        state,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
