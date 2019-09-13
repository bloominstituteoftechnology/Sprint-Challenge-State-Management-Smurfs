import { 
    GET_SMURFS_START,
    GET_SMURFS_SUCCESS, 
    GET_SMURFS_FAILURE,

    ADD_NEW_SMURF_START,
    ADD_NEW_SMURF_SUCCESS,
    ADD_NEW_SMURF_FAILURE
} from '../actions'

const initialState = {
    fetching: false,
    smurfs: []
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
                smurfs: state.smurfs.concat(action.payload.slice(-1))
            }
        case ADD_NEW_SMURF_FAILURE: 
            return {
                ...state,
                fetching: false
            }
        default: 
            return state
    }
}