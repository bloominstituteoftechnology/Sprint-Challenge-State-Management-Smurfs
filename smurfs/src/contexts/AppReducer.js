// import { createContext, useReducer } from "react";

export default (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        ...state,
        ediding: false,
        isFetching: false,
        error: "",
        smurfs: action.payload,
      };
    case "FETCH_ERROR":
      return {
        ...state,
        isFetching: false,
        editing: false,
        error: action.payload,
      };
    case "EDITING":
      return {
        ...state,
        isFetching: false,
        error: "",
        editing: !state.editing,
      };
    default:
      return state;
  }
};
