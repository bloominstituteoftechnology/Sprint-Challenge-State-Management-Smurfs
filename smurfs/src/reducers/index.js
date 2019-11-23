import {
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_START,
  FETCH_SMURFS_ERROR
} from "../actions";

const initialState = {
  isLoading: false,
  error: null,
  data: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURFS_START:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false
      };
    case FETCH_SMURFS_ERROR:
      return {
        ...state,
        data: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};

export default reducer;