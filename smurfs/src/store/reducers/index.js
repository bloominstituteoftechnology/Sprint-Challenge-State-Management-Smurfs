import { 
    GET_SMURFS_START,
    GET_SMURFS_SUCCESS, 
    GET_SMURFS_FAILURE,

    ADD_NEW_SMURF_START,
    ADD_NEW_SMURF_SUCCESS,
    ADD_NEW_SMURF_FAILURE,

    EDIT_SMURF_START,
    EDIT_SMURF_SUCCESS,
    EDIT_SMURF_FAILURE,

    DELETE_SMURF_START,
    DELETE_SMURF_SUCCESS,
    DELETE_SMURF_FAILURE
} from '../actions'

const initialState = {
    fetching: false,
    smurfs: [],
    editingSmurf: false,
    smurfToEditId: null,
    smurfToDeleteId: null
}

export default function smurfReducer(state=initialState, action) {
    switch(action.type) { 
        case GET_SMURFS_START: 
            return {
                ...state,
                fetching: true
            }

        case GET_SMURFS_SUCCESS: 
            return {
                ...state,
                fetching: false,
                smurfs: state.smurfs.concat(action.payload)
            }

        case GET_SMURFS_FAILURE: 
            return {
                ...state,
                fetching: false
            }

        case ADD_NEW_SMURF_START: 
            return {
                ...state, 
                fetching: true
            }

        case ADD_NEW_SMURF_SUCCESS: 
            return {
                ...state,
                fetching: false,
                smurfs: action.payload
            }

        case ADD_NEW_SMURF_FAILURE: 
            return {
                ...state,
                fetching: false
            }

        case EDIT_SMURF_START: 
            return {
                ...state,
                editingSmurf: true,
                smurfToEditId: action.payload
            }

        case EDIT_SMURF_SUCCESS: 
            return {
                ...state,
                editingSmurf: false,
                smurfToEditId: null,
                smurfs: action.payload,
            }
        
        case EDIT_SMURF_FAILURE: 
            return {
                ...state,
                editingSmurf: false,
                smurfToEditId: null
            }
        
        case DELETE_SMURF_START: 
            return {
                ...state,
                smurfToDeleteId: action.payload,
            }

        case DELETE_SMURF_SUCCESS: 
            return {
                ...state,
                smurfToDeleteId: null,
                smurfs: action.payload,
            }

        case DELETE_SMURF_FAILURE: 
            return {
                ...state,
                smurfToDeleteId: null
            }
        
        default: 
            return state
    }
}