// import { createContext, useReducer } from "react";

export default (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        error: "",
        smurfs: action.payload,
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
