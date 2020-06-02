import { ADD, SUCCESS, FAILED} from '../actions/index';

const initialState ={
    smurf: [],
    error: ""
}

export const reducer = (state = initialState, action) => {

    switch(action.type){
       
        case SUCCESS:
            return{
                ...state,
                smurf: action.payload
            }
        case ADD:
            return{
                ...state,
                smurf: [...state.smurf, action.payload]
            }
        case FAILED:
            return{
                ...state,
                error: action.payload
            }
            default:
                return state
                
    }
}