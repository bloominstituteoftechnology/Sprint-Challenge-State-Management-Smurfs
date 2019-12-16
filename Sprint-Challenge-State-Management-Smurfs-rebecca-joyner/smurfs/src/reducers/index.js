import {
    FETCH_SMURF_START,
    FETCH_SMURF_SUCCESS, 
    ERROR} from '../actions';

const initialState ={
    name:[],
    isFetching: false, 
    error: ' '
};



export const reducer = (state = initialState, action) =>{
    switch(action.type){
        case FETCH_SMURF_START:
            return{
                isFetching: true,
                error: ' ' 
            };
        case FETCH_SMURF_SUCCESS: 
            return{
                ...state, 
                isFetching: false, 
                name: action.payload,
            };
        case ERROR: 
            return{
                ...state,
                error: '  '
            }
            default:
               return state;
    }; 
}; 
