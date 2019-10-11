import { GET_SMURFS, GET_SMURFS_SUCCESS, GET_SMURFS_FAILURE, ADD_SMURF, ADD_SMURF_SUCCESS, ADD_SMURF_FAILURE, DELETE_SMURF, DELETE_SMURF_SUCCESS, DELETE_SMURF_FAILURE, EDIT_SMURF, EDIT_SMURF_SUCCESS, EDIT_SMURF_FAILURE } from '../actions';

const initialState = {
    smurfs: [],
    fetchingSmurfs: false,
    addingSmurf: false,
    updatingSmurf: false,
    deletingSmurf: false,
    error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SMURFS:
            return {
                ...state,
                fetchingSmurfs: true,
                error: null
            }
        case GET_SMURFS_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                fetchingSmurfs: false
            }
        case GET_SMURFS_FAILURE:
            return {
                ...state,
                fetchingSmurfs: false,
                error: action.payload
            }
        case ADD_SMURF:
            return {
                ...state,
                addingSmurf: true,
                error: null
            }
        case ADD_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                addingSmurf: false
            }
        case ADD_SMURF_FAILURE:
            return {
                ...state,
                addingSmurf: false,
                error: action.payload
            }
        case DELETE_SMURF:
            return {
                ...state,
                deletingSmurf: true,
                error: null
            }
        case DELETE_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                deletingSmurf: false
            }
        case DELETE_SMURF_FAILURE:
            return {
                ...state,
                deletingSmurf: false,
                error: action.payload
            }
        case EDIT_SMURF:
            return {
                ...state,
             updatingSmurf: true,
             error: null
            }
        case EDIT_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                updatingSmurf: false
            }
        case EDIT_SMURF_FAILURE:
        return {
                ...state,
                updatingSmurf: false,
                error: action.payload
            }
        default:
        return state;
    }
};

export default reducer;
