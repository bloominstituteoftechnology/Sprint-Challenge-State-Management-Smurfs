import {
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE
} from '../actions';

const initialState = {
    smurfs: [],
    error: '',
    loading: false
};
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_DATA_START:
        return {
          ...state,
          error: '',
          loading: true
    };
  
      case FETCH_DATA_SUCCESS:
        return {
            ...state,
            error: '',
            smurfs: action.payload
        };
  
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false,
                smurfs: null
            }
    default: return state;
        }
    }