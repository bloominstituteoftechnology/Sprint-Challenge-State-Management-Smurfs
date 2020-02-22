import {
    FETCHING_SMURF_START,
    FETCHING_SMURF_SUCCESS,
    FETCHING_SMURF_FAILURE,
} from '../actions';

const initialState = {
    isLoading: false,
    err: "",
    smurf: [
    ]
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_SMURF_START :
            return {
                ...state,
                isLoading: true
            };
        case FETCHING_SMURF_SUCCESS:
            return {
                ...state,
                isLoading: false,
                smurf: action.payload
            };
        case FETCHING_SMURF_FAILURE :
            return {
                ...state,
                isLoading: false,
                err: action.payload
            };
        default:
            return state;
    };
};