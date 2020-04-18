import { DATA_SUCCESS, EDIT_DATA } from "../actions";

const initialState = {
    data: [],
    edit: undefined
};

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case DATA_SUCCESS:  
            return {...state, data: action.payload, edit: undefined }
        case EDIT_DATA: 
            return {...state, edit: action.payload}
        default:
            return state
    }
}

export default reducer;