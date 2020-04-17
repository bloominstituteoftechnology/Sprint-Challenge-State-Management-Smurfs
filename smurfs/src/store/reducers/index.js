import { FETCH_DATA_BEGIN, FETCH_DATA_YAY, FETCH_DATA_BOO } from '../actions';

const initialState = {
    smurfs: [],
    isLoading: false,
    error: ''
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_BEGIN: 
            return {
                ...state,
                isLoading: true,
                error: ''
            };
        case FETCH_DATA_YAY: 
            return {
                ...state,
                isLoading: false,
                smurfs: action.payload,
                error: ''
            };
        case FETCH_DATA_BOO:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case POST_NEWSMURF_YAY:
            const newSmurf = {
                name: action.payload,
                location: '',
            }
        default: 
            return state;
    }
}