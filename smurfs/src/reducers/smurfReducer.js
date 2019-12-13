import {SMURFING, SUCCESS, ERROR} from '../actions'

const initialState = {
    village: null,
    isSmurfing: false,
    error: ''
};

const reducer = (state= initialState, action) => {
    switch (action.type) {
        case SMURFING :
            return {
                ...state,
                isSmurfing: true
            }
        case SUCCESS : 
            return {
                ...state,
                village: action.payload,
                isSmurfing: false
            }
        case ERROR: 
            return {
                ...state,
                isSmurfing: false,
                error: action.payload
            }
        default: 
            return state;
    }
}

export default reducer