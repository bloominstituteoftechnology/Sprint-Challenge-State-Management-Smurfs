import {ADD_SMURF} from '../actions';

const initialState ={
    smurfs: []
};
 const rootReducer = (state = initialState, action) =>{
     switch (action.type) {
        case ADD_SMURF:
            return{
                ...state, smurfs: action.payload
            }
        default:
            return state;
    };

 }
    
export default rootReducer;