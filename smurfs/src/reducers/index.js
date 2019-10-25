//import action types
import {
    SMURF_DATA_START,
    SMURF_DATA_SUCCESS,
   
} from '../actions/index';

export const initialState = {
   smurfData: []
};

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case SMURF_DATA_START:
            return{...state, 
                    };
        case SMURF_DATA_SUCCESS:
            return {
                ...state,
                smurfData: action.payload
            }
        
        default: 
            return state;
    }
};