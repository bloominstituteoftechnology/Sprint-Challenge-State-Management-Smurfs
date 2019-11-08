import {
  START_FETCHING,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  ADD_SMURFFAILURE,
  ADD_SMURFSUCCESS,
  START_ADDSMURF
} from "../actions/index";

const initialState = {
  smurfInfo: [],
  isFetching: false,
  error: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCHING:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: "",
        smurfInfo: action.payload
      };
    case FETCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    case START_ADDSMURF:
      return {
        ...state
      };
    case ADD_SMURFSUCCESS:
      return {
        ...state,
        smurfInfo: [...action.payload]
      };
    case ADD_SMURFFAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
