import {POST_SMURF_START,POST_SMURF_SUCCESS,POST_SMURF_ERROR} from '../actions/actionreducer'


const initialState = {
   film: false,
   sucess: null,
   error: null
}

export function postReducer(state=initialState, action) {
   
    switch(action.type) {
        case POST_SMURF_START:
            return {
                ...state,
                film: true
            }
    
            case POST_SMURF_SUCCESS: 
            return {
                ...state, 
                film: true,
                sucess: action.payload
               
            }

            case POST_SMURF_ERROR: {
                return {
                    ...state, 
                    film: false,
                    error: action.payload,
                    
                }
            }
            default:
                return state;
    }
        

}