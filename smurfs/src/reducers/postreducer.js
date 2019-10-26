import {POST_SMURF_START,POST_SMURF_SUCCESS,POST_SMURF_ERROR, UPDATE_SMURF} from '../actions/actionreducer'


const initialState = {
    name: 'Brainey',
    age: 200,
    height: '5cm'
}

export function postReducer(state=initialState, action) {
    switch(action.type) {
            case POST_SMURF_SUCCESS: 
            return {
                ...state, 
                film: action.payload, 
               
            }

            case POST_SMURF_ERROR: {
                return {
                    ...state, 
                    error: action.payload,
                    
                }
            }
            default:
                return state;
    }
        

}