import { DATA_SUCCESS } from "../actions";

const initialState = {
    data: []
};

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case DATA_SUCCESS:  
            return {...state, data: action.payload }
        default:
            return state
    }
}

export default reducer;