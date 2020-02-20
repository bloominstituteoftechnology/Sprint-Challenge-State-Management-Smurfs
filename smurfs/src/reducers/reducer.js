import {
  SMURF_DATA_START,
  SMURF_DATA_SUCCESS
} from '../actions';

const initialState =  {
  name: '',
  age: '',
  height: '',
  id: 0
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case SMURF_DATA_START:
      return {
        ...state,
        isLoading: true
      };
    case SMURF_DATA_SUCCESS:
      return {
        ...state,
        blue: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};

export default reducer;