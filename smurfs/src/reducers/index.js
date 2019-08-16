import {
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  POST_DATA_START,
  POST_DATA_SUCCESS,
  POST_DATA_FAILURE
} from "../actions";

const initialState = {
  data: [],
  isLoading: false,
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: [action.payload],
        isLoading: false,
        error: ""
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case POST_DATA_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case POST_DATA_SUCCESS:
      return {
        ...state,
        data: [action.payload],
        isLoading: false,
        error: ""
      };
    case POST_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
