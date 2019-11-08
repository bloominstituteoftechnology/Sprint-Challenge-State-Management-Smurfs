import { FETCH_SUCCESS } from '../actions/index';

const initialState = {
    smurfs: [],
    error: null,
    isFetching: false
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isFetching: true,
                error: null
            }
        default:
            return state;
    }
} 