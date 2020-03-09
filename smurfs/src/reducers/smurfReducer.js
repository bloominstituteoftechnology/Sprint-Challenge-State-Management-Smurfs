import { FETCH_SMURFS, NEW_SMURF } from "../actions/types";

const initialState = {
  items: [], // smurfs returned from FETCH request
  item: {} // single smurf added
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_SMURFS:
      return {
        ...state,
        items: action.payload
      };
    case NEW_SMURF:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}
