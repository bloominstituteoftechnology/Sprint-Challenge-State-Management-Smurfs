// Actions
import { UPDATE_STATE_WITH_SMURFS } from "../actions";

const initialState = [];

function reducer(state, action) {
  console.log(state);
  switch (action.type) {
    case UPDATE_STATE_WITH_SMURFS:
      return [...state, action.payload];
    default:
      return state;
  }
}

export { reducer, initialState };
