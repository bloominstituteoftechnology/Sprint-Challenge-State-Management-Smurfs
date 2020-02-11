import {
    FETCH_DATA, UPDATE_SMURFS, POST_DATA, ADD_NEW_SMURF,
    SET_ERROR
} from '../actions';

const initialState = {
    smurfList: [],
    isFetchingData: false,
    error: ""
}

export const smurfReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                isFetchingData: true
            };
        case POST_DATA:
            return {
                ...state,
                isUpdatingData: true
            }
        case UPDATE_SMURFS:
            return {
                ...state,
                smurfList: action.payload,
                isFetchingData: false
            }
        case ADD_NEW_SMURF:
            return {
                ...state,
                smurfList: action.payload,
                isFetchingData: false
            }
        case SET_ERROR:
            return {
                ...state,
                isFetchingData: false,
                error: action.payload
            };
        default: return state;
    }
}