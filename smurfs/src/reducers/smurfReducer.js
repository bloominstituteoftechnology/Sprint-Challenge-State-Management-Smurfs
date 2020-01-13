import { GET_SMURFS, ADD_SMURFS } from '../actions';

const initialState  = {
    name: '',
    age: '',
    height: '',
    id: new Date()
}

export const smurfReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_SMURFS':
            return { ...state, id: action.payload};
        case 'ADD_SMURF':
            return {...state,  action: action.payload}
         default: 
            return state;   
    }
} 