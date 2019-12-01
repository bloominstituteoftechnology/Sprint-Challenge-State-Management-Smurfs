import {
  GET_SMURFS_START,
  GET_SMURFS_SUCCESS,
  GET_SMURFS_FAIL,
  ADD_SMURF_START, 
  ADD_SMURF_SUCCESS, 
  ADD_SMURF_FAIL,
  EDIT_SMURF_START,
  EDIT_SMURF_SUCCESS,
  EDIT_SMURF_FAIL,
  DELETE_SMURF_START,
  DELETE_SMURF_SUCCESS,
  DELETE_SMURF_FAIL

} from "../actions";


const initialState = {
  smurfs: [],
  error: '',
  isLoading: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SMURFS_START:
      return {
        ...state,
        isFetching: true

      }
    case GET_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: [...state.smurfs, ...action.payload],
        isLoading: false
      }
      
    case GET_SMURFS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
      
    case ADD_SMURF_START:
      return {
        ...state,
      }

    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: [...state.smurfs, action.payload]
      }
    case ADD_SMURF_FAIL:
      return {
        ...state,
        error: action.payload,
      }

    case EDIT_SMURF_START:
      return {
        ...state,
        isLoading: true
      }

    case EDIT_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isLoading: false
      }
    case EDIT_SMURF_FAIL:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      }

    case DELETE_SMURF_START:
      return {
        ...state,
        isLoading: true
      }

    case DELETE_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isLoading: false
      }
    case DELETE_SMURF_FAIL:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      }

  
    default:
      return state
  }
}

export default reducer