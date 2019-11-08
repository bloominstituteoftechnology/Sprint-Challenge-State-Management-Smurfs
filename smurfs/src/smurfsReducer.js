import { FETCHING_SMURFS, SMURF_FETCH_SUCCESS, SMURF_FETCH_ERROR, POST_NEW_SMURF_START,  POST_NEW_SMURF_SUCCESS, POST_NEW_SMURF_FAILURE} from "./smurfAction";

const initialState = { smurfs: [],
fetchingSmurfs: false, error: "" };

export const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      return {...state, fetchingSmurfs: true }; 
    case SMURF_FETCH_SUCCESS:
      return {...state, 
        smurfs: [...state.smurfs, ...action.payload], 
        fetchingSmurfs: false 
      };
    case SMURF_FETCH_ERROR:
      return {...state, 
        fetchingSmurfs: false, 
        error: "Error fetching Smurfs" 
      };
      case POST_NEW_SMURF_START:
        return {...state, isFetching: true, errors: null, smurfs: []}
    case POST_NEW_SMURF_SUCCESS:
        return {...state, isFetching: false, errors: null, smurfs: action.payload}
    case POST_NEW_SMURF_FAILURE:
        return {...state, isFetching: false, errors: action.payload, smurfs: []}
    default:
      return state;
  }
};