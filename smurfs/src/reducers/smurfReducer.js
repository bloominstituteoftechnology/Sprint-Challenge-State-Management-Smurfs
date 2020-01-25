import { 
    GET_SMURFS_START, 
    GET_SMURFS_SUCCESS, 
    ADD_SMURF_START, 
    ADD_SMURF_SUCCESS, 
    DELETE_SMURF_START, 
    DELETE_SMURF_SUCCESS, 
    EDIT_SMURF_START,
    EDIT_SMURF_SUCCESS 
} from "../actions/actions";

const initialState = {
        initialMode: true,
        smurfs: [],
        isFetching: false,
        error: ''
    }

export const smurfReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_SMURFS_START:
            return {
                ...state,
                initialMode: false,
                isFetching: true
            }
        case GET_SMURFS_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false
            }
        case ADD_SMURF_START:
            return {
                ...state,
                isFetching: true
            }
        case ADD_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false
            }
        case DELETE_SMURF_START:
            return {
                ...state,
                isFetching: true
            }
        case DELETE_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false
            }
        case EDIT_SMURF_START:
            return {
                ...state,
                isFetching: true
            }
        case EDIT_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false
            }      
        default:
            return state;
    }
}