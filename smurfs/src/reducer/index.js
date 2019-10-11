import {
  START_FETCHING,
  FETCH_FAILURE,
  FETCH_SUCCESS,
  POSTING,
  POST_SUCCES,
  POST_FAILURE,
  DELETE_SUCC,
  DELETE_FAIL
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

    case POST_SUCCES:
      return {
        ...state,
        characters: action.payload,
        error: ''
      };
    case DELETE_SUCC:
      return {
        ...state,
        characters: action.payload,
        error: ''
      };

    default:
      return state;
  }
};

export default reducer;
