import { GET_SMURFS, ADD_SMURFS } from '../actions';

const initialState  = {
    items: [],
    item: {}
}

export const smurfReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_SMURFS':
            return { ...state, items: action.payload};
        case 'ADD_SMURFS':
            return {...state,  item: action.payload};
         default: 
            return state;   
    }
} 