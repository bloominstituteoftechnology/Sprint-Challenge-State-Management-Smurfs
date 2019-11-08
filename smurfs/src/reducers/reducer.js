import {
  ADD_SMURF,
  START_FETCHING,
  FETCH_SUCCESS,
  FETCH_FAILURE
} from "../actions/actions";

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  error: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SMURF:
      return {
        smurfs: action.payload
      };

    case START_FETCHING:
      return {
        ...state,
        error: "",
        fetchingSmurfs: true
      };

    case FETCH_SUCCESS:
      return {
        ...state,
        error: "",
        smurfs: action.payload
      };

    case FETCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        fetchingSmurfs: false
      };
    default:
      return state;
  }
};

export default reducer;
