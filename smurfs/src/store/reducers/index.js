import { 
  FETCH_SMURF_START, 
  FETCH_SMURF_SUCCESS, 
  FETCH_SMURF_FAILURE
} from '../actions/FetchSmurf'




export const initialState = {
  error: '',
  isFetching: false,
  smurf:[]
}

export const reducer = (state = initialState, action) => {
  
  switch(action.type) {

    case FETCH_SMURF_START:
      return{
        ...state,
        error: '',
        isFetching: true,
        smurf:''
      };

      case FETCH_SMURF_SUCCESS:
      return{
        ...state,
        error: '',
        isFetching: false,
        smurf: action.payload
      };

      case FETCH_SMURF_FAILURE:
      return{
        ...state,
        error: '',
        isFetching: false,
        smurf:''
      };
  
    default:
      return state;
  };
}


