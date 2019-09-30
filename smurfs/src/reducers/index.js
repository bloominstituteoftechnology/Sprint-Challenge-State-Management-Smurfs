//import action types
import {
    SMURF_DATA_START,
    SMURF_DATA_SUCCESS,
   
} from '../actions/index';

export const initialState = {
    name: "",
    age: "",
    height: ""
};

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case SMURF_DATA_START:
            return{...state, 
                      
                };
        case SMURF_DATA_SUCCESS:
            return state = action.payload;
        
        default: 
            return state;
    }
};