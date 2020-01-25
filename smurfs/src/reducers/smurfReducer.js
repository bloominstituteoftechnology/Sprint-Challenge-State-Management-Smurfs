import { FETCHING_ACTIVITY_SUCCESS } from "../actions";

const initialState = {
  smurfs: [
    { name: "Jason", age: 33, height: "100cm" },
    { name: "Jason", age: 33, height: "100cm" }
  ],
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_ACTIVITY_SUCCESS:
      return {
        ...state,
        smurfs: action.payload
      };
    default:
      return state;
  }
};
