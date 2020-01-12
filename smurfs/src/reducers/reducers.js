import {
    FETCH_SMURFS_START,
    FETCH_SMURFS_SUCCESS,
    FETCH_SMURFS_FAILURE,
    ADD_SMURFS_SUCCESS
} from '../actions/actions';

const initialState = {
    smurfs: [],
    isFetching: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {

        case FETCH_SMURFS_START: 
            return {
                ...state,
                isFetching: true
            }

        case FETCH_SMURFS_SUCCESS:
            return {
                ...state,
                smurfs: action.payload.data,
                isFetching: false,
                error: ''
            }

        case FETCH_SMURFS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload.error
            }

        case ADD_SMURFS_SUCCESS:
            return {
                ...state,
                smurfs: action.payload.data
            }

        default:
            return state
    }
}