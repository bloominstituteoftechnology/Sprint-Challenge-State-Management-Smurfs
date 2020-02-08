import {FETCH_DATA, UPDATE_SMURFS ,SET_ERROR} from '../actions';

export const initialState = {
    smurfs:[], 
    isFetchingData: false,
    error: ""
};

export const smurfsReducer =( state =initialState, action) => { 
    switch(action.type){
        case FETCH_DATA:
            return {
                ...state, isFetchingData:true
            };
         case UPDATE_SMURFS:
             return {
                ...state,
                smurfs:action.payload,
                isFetchingData: false
             };
             case SET_ERROR:
                 return {
                     ...state,
                     isFetchingData:false,
                     error: action.payload
                 }
        default :
            return state;
    };
}