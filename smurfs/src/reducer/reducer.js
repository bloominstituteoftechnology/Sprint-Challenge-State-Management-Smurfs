import { BEGIN, SUCCESS, FAILURE } from '../action/action'

const initialState = {
    smurfs: [],
    error: ""
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case BEGIN:
            return {
                ...state,
                smurfs: [ ...state.smurfs, action.payload ]
            }
        case SUCCESS:
            return {
                ...state,
                smurfs: action.payload
            }
        case FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}