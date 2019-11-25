import { GET_SMURFS_START, GET_SMURFS_SUCCESS, GET_SMURFS_FAIL,ADD_SMURF_START, ADD_SMURF_SUCCESS, ADD_SMURF_FAIL } from "../actions";


const initialState = {
  smurfs: [],
  error: '',
  isFetching: false,
  isPosting: false
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
        isFetching: false
      }
      
    case GET_SMURFS_FAIL:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      }
      
    case ADD_SMURF_START:
      return {
        ...state,
        isPosting: true
      }

    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isPosting: false
      }
    case ADD_SMURF_FAIL:
      return {
        ...state,
        error: action.payload,
        isPosting: false
      }
  
    default:
      return state
  }
}

export default reducer