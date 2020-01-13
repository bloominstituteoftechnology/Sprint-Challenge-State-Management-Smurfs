import {
    GET_SMURFS_START,
    GET_SMURFS_SUCCESS,
    GET_SMURFS_FAIL,
} from '../actions/getSmurfs';
import {
    ADD_SMURF_START,
    ADD_SMURF_SUCCESS,
    ADD_SMURF_FAIL
} from '../actions/addSmurf';
import {
    DELETE_SMURF_START,
    DELETE_SMURF_SUCCESS,
    DELETE_SMURF_FAIL
} from '../actions/deleteSmurf';

const initialState =  {
    smurfs: [],
    gettingSmurfs: false,
    addingSmurf: false,
    deletingSmurf: false,
    error:''
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_SMURFS_START:
            return {
                ...state,
                gettingSmurfs: true,
                error: ''
            }
        case GET_SMURFS_SUCCESS:
            return {
                ...state,
                gettingSmurfs: false,
                smurfs: action.payload,
                error: ''
            }
        case GET_SMURFS_FAIL:
            return {
                ...state,
                gettingSmurfs: false,
                error: action.payload
            }
        case ADD_SMURF_START:
            return {
                ...state,
                addingSmurf: true,
                error: ''
            }
        case ADD_SMURF_SUCCESS:
            return {
                ...state,
                addingSmurf: false,
                smurfs: action.payload,
                error: '' 
            }
        case ADD_SMURF_FAIL:
            return {
                ...state,
                addingSmurf: false,
                error: action.payload
            }
        case DELETE_SMURF_START:
            return {
                ...state,
                deletingSmurf: true,
                error: ''
            }
        case DELETE_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                deletingSmurf: false,
                error: ''
            }
        case DELETE_SMURF_FAIL:
            return {
                ...state,
                deletingSmurf: false,
                error: action.payload
            }
        default: 
            return state;
    }
    
}