import * as types from './actionTypes';

const initialState = [];
const initialFormState = {
    name: '',
    age: '',
    height: ''
}


export const smurfReducer = (state=initialState, action) => {
    switch(action.type) {
        case types.GET_SMURF:
            return action.payload
        default:
            return state;
 
    }
}

export const formReducer = (state=initialFormState, action) => {
    switch(action.type){
        case types.ADD_NEW_SMURF:
            return {
                ...state,
                items: action.payload
            }

        case types.ON_FORM_CHANGE:
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }

        default:
            return state;
 
    }
}