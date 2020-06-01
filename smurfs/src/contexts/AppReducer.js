import { initialState } from "./GlobalState";

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        ...state,
        editing: false,
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
