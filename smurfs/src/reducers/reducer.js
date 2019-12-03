import {
  SMURF_DATA_START,
  SMURF_DATA_SUCCESS
} from '../actions';

const reducer = (state, action) => {
  switch(action.type) {
    case SMURF_DATA_START:
      return {
        ...state,
        isLoading: true
      };
    case SMURF_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
  return {
    name: '',
    age: '',
    height: '',
    id: 0
  };
};

export default reducer;