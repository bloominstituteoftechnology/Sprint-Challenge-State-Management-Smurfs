import {
SMURF_NAME,
SMURF_NAME_SUCCESS,
SMURF_NAME_ERROR,
SMURF_AGE,
SMURF_HEIGHT
} from '../actions/smurf';

const initialState = {
    name: null,
    isLoading: false,
    error: null
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case SMURF_NAME:
      return {
        ...state,
        isLoading: true
      };
    case SMURF_NAME_SUCCESS:
      return {
        ...state,
        dog: action.payload,
        isLoading: false
      };
    case SMURF_NAME_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
      case SMURF_AGE:
        return {
          ...state,
          isLoading: true
        };
        case SMURF_HEIGHT:
            return {
              ...state,
              isLoading: true
            };
    default:
      return state;
  }
}