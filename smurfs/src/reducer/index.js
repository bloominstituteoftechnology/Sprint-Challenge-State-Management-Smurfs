import {
  START_FETCHING,
  FETCH_FAILURE,
  FETCH_SUCCESS,
  POSTING,
  POST_SUCCES,
  POST_FAILURE
} from '../actions';

export const initialState = {
  characters: [],
  isFetching: false,
  error: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCHING:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        characters: action.payload,
        isFetching: false,
        error: ''
      };
    case FETCH_FAILURE:
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
