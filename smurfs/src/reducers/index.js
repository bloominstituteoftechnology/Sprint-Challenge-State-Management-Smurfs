import {
  FETCH_SMURF_FAILURE,
  FETCH_SMURF_START,
  FETCH_SMURF_SUCCESS,
  SMURF_ADDED,
  SMURF_ADDING,
  SMURF_DELETED,
  SMURF_DELETING
} from "../actions";

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURF_START:
      return {
        ...state,
        error: "",
        fetchingSmurfs: true
      };
    case FETCH_SMURF_SUCCESS:
      return {
        ...state,
        error: "",
        fetchingSmurfs: false,
        smurfs: action.payload
      };

    case SMURF_ADDING:
      return {
        ...state,
        addingSmurf: true
      };
    case SMURF_ADDED:
      return {
        ...state,
        error: "",
        addingSmurf: false,
        smurfs: action.payload
      };

    case SMURF_DELETING:
      return {
        ...state,
        deletingSmurf: true
      };

    case SMURF_DELETED:
      return {
        ...state,
        error: "",
        deletingSmurf: false,
        smurf: action.payload
      };

    case FETCH_SMURF_FAILURE:
      return {
        ...state,
        error: "",
        addingSmurf: false,
        fetchingSmurfs: false,
        updatingSmurf: false,
        deletingSmurf: false,
        error: action.payload
      };
    default:
      return state;
  }
};
