import { 
  FETCHING_SMURFS, 
  SMURF_FETCH_SUCCESS, 
  SMURF_FETCH_ERROR, 
  POST_NEW_SMURF_START,  
  POST_NEW_SMURF_SUCCESS, 
  POST_NEW_SMURF_FAILURE, 
  UPDATE_SMURF_START,
  UPDATE_SMURF_SUCCESS,
  UPDATE_SMURF_FAILURE,
  DELETE_SMURF_START,
  DELETE_SMURF_SUCCESS,
  DELETE_SMURF_FAILURE} from "./smurfAction";

const initialState = { 
  smurfs: [
    {
      name: '',
      age: '',
      height: '',
      id: '',
      editing: false
    }
  ],
  fetchingSmurfs: false, 
  errors: ''
};

export const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {

  // ========== FETCH ========= //
    case FETCHING_SMURFS:
      return {
        ...state, 
        fetchingSmurfs: true 
      }; 
    
    case SMURF_FETCH_SUCCESS:
      return {
        ...state, 
        smurfs: [
          ...state.smurfs, 
          ...action.payload], 
        fetchingSmurfs: false 
      };
    
    case SMURF_FETCH_ERROR:
      return {
        ...state, 
        fetchingSmurfs: false, 
        error: "Error fetching Smurfs" 
      };
  // ========== FETCH ========= //


  // ========== POST ========= //
    case POST_NEW_SMURF_START:
        return {
          ...state, 
          isFetching: true, 
          errors: null, 
          smurfs: []
        }
    case POST_NEW_SMURF_SUCCESS:
        return {
          ...state, 
          isFetching: false, 
          errors: null,  
          smurfs: [
            ...state.smurfs, 
            ...action.payload]
        }
    case POST_NEW_SMURF_FAILURE:
        return {
          ...state, 
          isFetching: false, 
          errors: action.payload, 
          smurfs: []}
// ========== POST ========= //


// ========== UPDATE ========= //
    case UPDATE_SMURF_START:
        return {
          ...state, 
          isFetching: true, 
          smurfs: []
        }
    case UPDATE_SMURF_SUCCESS:
        return {
          ...state,
          isFetching: false,
          smurfs: [
            ...state.smurfs,
            
          ]}
    case UPDATE_SMURF_FAILURE:
        return {
          ...state, 
          isFetching: false, 
          errors: action.payload, 
          smurfs: []
        }
// ========== UPDATE ========= //


// ========== DELETE ========= //
        case DELETE_SMURF_START:
            return {
              ...state, 
              isFetching: true, 
              smurfs: []
            }
        case DELETE_SMURF_SUCCESS:
            return {
              ...state,
              isFetching: false,
              smurfs: [
                ...state.smurfs,
                action.payload
              ]
            }
        case DELETE_SMURF_FAILURE:
            return {
              ...state,
              isFetching: false,
              errors: action.payload,
              
            }
  // ========== DELETE ========= //
    default:
      return state;
  }
};