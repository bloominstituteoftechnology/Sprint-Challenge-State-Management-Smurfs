import { FETCH_SMURF_START, FETCH_SMURF_SUCCESS, FETCH_SMURF_FAIL,
    ADD_SMURF_START, ADD_SMURF_SUCCESS, ADD_SMURF_FAIL 
} from '../actions';

const initialState = {

smurfs: [],
fetchingSmurfs: false,
error: '',
addingSmurfs: false,

};

export const smurfReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SMURF_START:
            return {
                ...state,
                fetchingSmurfs: true,
                error: ''
            }


        case FETCH_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                fetchingSmurfs: false,
                error: ''
            }
        
        case FETCH_SMURF_FAIL:
            return{
                ...state,
                fetchingSmurfs: false,
                error: action.payload
            }
    

        case ADD_SMURF_START:
            return{
                ...state,
                addingSmurfs: true,
                error: ''
            }

        case ADD_SMURF_SUCCESS:
            return{
                ...state,
                smurfs: action.payload,
                addingSmurfs: false,
                error: ''
            }

        case ADD_SMURF_FAIL:
            return{
                ...state,
                addingSmurfs: false,
                error: action.payload
            }

    default:
        return state;   
    }
}