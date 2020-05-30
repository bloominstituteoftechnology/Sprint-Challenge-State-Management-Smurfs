import {START, ADD, SUCCESS, FAILED} from '../actions/index';

const initialState ={

    isLoading: false,
    smurf: [],
    error: ""
}

export const reducer = (state = initialState, action) => {

    switch(action.type){
        case START:
            return {
                ...state,
                isLoading: true
            }
        case SUCCESS:
            return{
                ...state,
                isLoading: false,
                smurf: action.payload
            }
        case ADD:
            return{
                ...state,
                isLoading: false,
                smurf: [...state.smurf, action.payload]
            }
        case FAILED:
            return{
                ...state,
                isLoading: false,
                error: action.payload
            }
            default:
                return state
                
    }
}