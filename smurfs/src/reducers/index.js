import { START_SMURF_FETCH, SUCCESS_SMURF_FETCH, FAIL_SMURF_FETCH } from '../actions'

const intialState = {
    smurfs: [],
    isFetching: false,
    error:''
}


export const reducer = (state = intialState, action) => {
    switch(action.type){
        case START_SMURF_FETCH:
            return {
                ...state,
                isFetching: true,
                error:''
            };
        case SUCCESS_SMURF_FETCH:
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false,
                error: ''
            };
       case FAIL_SMURF_FETCH:
           return {
               ...state,
               error: action.payload
           }
        default:
            return state;
    }
}