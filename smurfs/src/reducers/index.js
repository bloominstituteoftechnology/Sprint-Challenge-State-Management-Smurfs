import {
    FETCHING_SMURF_START,
    FETCHING_SMURF_SUCCESS,
    FETCHING_SMURF_FAILURE,
    POSTING_SMURF_START,
    POSTING_SMURF_SUCCESS,
    POSTING_SMURF_FAILURE
} from '../actions';

const initialState = {
    isLoading: false,
    err: "",
    smurf: [

    ]
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    };
};