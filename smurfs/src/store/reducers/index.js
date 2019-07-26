import { 
  FETCH_SMURFS_START, 
  FETCH_SMURFS_SUCCESS, 
  FETCH_SMURFS_FAILURE,
  ADD_SMURF_START, 
  ADD_SMURF_SUCCESS, 
  ADD_SMURF_FAILURE
} from '../actions/index'




export const initialState = {
  error: '',
  isFetching: false,
  addingSmurf:false,

  smurfs:[]
}

export const rootReducer = (state = initialState, action) => {
  
  switch(action.type) {

    case FETCH_SMURFS_START:
      return{
        ...state,
        error: '',
        isFetching: true,
      };

      case FETCH_SMURFS_SUCCESS:
      return{
        ...state,
        error: '',
        isFetching: false,
        smurfs: action.payload
      };

      case FETCH_SMURFS_FAILURE:
      return{
        ...state,
        error: action.payload,
        isFetching: false,
      };

/////////////////////////////////////////

      case ADD_SMURF_START:
        return {
          ...state,
          addingSmurf: true,
          error: ''
        };
      case ADD_SMURF_SUCCESS:
        return {
          ...state,
          smurfs: action.payload,
          addingSmurf: false,
          error: '',
        };
      case ADD_SMURF_FAILURE:
        return {
          ...state,
          addingSmurf: false,
          error: action.payload,
        };
  
    default:
      return state;
  };
}


