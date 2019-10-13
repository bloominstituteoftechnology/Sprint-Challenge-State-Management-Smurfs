import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE, NEW_SMURF_FETCH, NEW_SMURF_SUCCESS, NEW_SMURF_FAILURE  } from '../actions';

//possible states
const initialState = {
    smurfs : [],
    isFetching: false,
    error: '',
    
};

//state transitioning
// error: '' clears out error message
// isfetching 
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
        isFetching: false,
        error: '',
        smurfs: action.payload
      };
    case FETCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    case NEW_SMURF_FETCH:
        return {
          ...state,
          smurfs: [...state.smurfs, action.payload],
          isFetching: true,
          error: ''
        };
        case NEW_SMURF_SUCCESS:
            return {
              ...state,
              smurfs: action.payload,
              isFetching: false,
              error: ''
            };
          case NEW_SMURF_FAILURE:
            return {
              ...state,
              isFetching: false,
              error: action.payload
            };
    // case ADD_SMURF:
    //   const newS = {
    //     name: action.payload.name,
    //     age: action.payload.age,
    //     height: action.payload.height
    //   }
      // return[
      //   ...state.smurfs, newS
      // ]
    default:
      return state;
  }
};

export default reducer;