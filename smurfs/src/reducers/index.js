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
  isLoading: false,
  toggleEdit: false,
  isEditing: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SMURFS_START:
      return {
        ...state,
        isLoading: true
      }
    case GET_SMURFS_SUCCESS:
      return {
        ...state,
        error: '',
        smurfs: [...action.payload],
        isLoading: false
      }
      
    case GET_SMURFS_FAIL:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      }
      
    case ADD_SMURF_START:
      return {
        ...state,
        isLoading: true
      }

    case ADD_SMURF_SUCCESS:
      return {
        smurfs: [...state.smurfs, {...action.paylod}],
        smurfs: [...state.smurfs],
        isLoading: false,
        isEditing: false,
      }

    case ADD_SMURF_FAIL:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
        isEditing: false
      }

    case EDIT_SMURF_START:
      return {
        ...state,
        isEditing: !state.isEditing,
        toggleEdit: !state.toggleEdit
      }

    case EDIT_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: [...state.smurfs].filter( smurf => {
          if (smurf.id !== action.payload) {
            return [...state.smurfs, ...action.payload]
          }
          return {
          }
        }),
        ...state,
        isEditing: true,
        toggleEdit: true
        // isLoading: false,
      }
    case EDIT_SMURF_FAIL:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
        isEditing: false
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