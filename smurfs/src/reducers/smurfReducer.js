import {
  FETCH_SMURF_START,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURF_FAILURE
} from "../actions";

const initialState = {
  smurf: [],
  isFetching: false,
  error: ""
};

const reducer = (state = initialState, action) => {
  // console.log(state, "state");
  switch (action.type) {
    case FETCH_SMURF_START:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_SMURF_SUCCESS:
      // console.log(action.payload, "success");
      return {
        ...state,
        smurf: action.payload,
        isFetching: false,
        error: ""
      };
    case FETCH_SMURF_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
