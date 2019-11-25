import { GET_SMURFS_START, GET_SMURFS_SUCCESS, GET_SMURFS_FAIL,ADD_SMURF_START, ADD_SMURF_SUCCESS, ADD_SMURF_FAIL } from "../actions";


const initialState = {
  name: '',
  age: null,
  height: '',
  id: null,
  smurfs: [],
  error: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SMURFS_START:
      return {
        ...state
      }
    case GET_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: [...state.smurfs, ...action.payload]
      }
      
    case GET_SMURFS_FAIL:
      return {
        error: action.payload
      }
      
    case ADD_SMURF_START:
      return {
        ...state
      }

    case ADD_SMURF_SUCCESS:
      return {
        ...state
      }
    case ADD_SMURF_FAIL:
      return {
        error: action.payload
      }
  
    default:
      return state
  }
}

export default reducer