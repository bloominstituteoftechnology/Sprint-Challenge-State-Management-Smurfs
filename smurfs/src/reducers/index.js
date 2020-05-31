// Actions
import { UPDATE_STATE_WITH_SMURFS } from "../actions";

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case UPDATE_STATE_WITH_SMURFS:
      return [...state.concat(action.payload)];
    default:
      return state;
  }
}

export { reducer, initialState };
