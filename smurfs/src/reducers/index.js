import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE, ADD_SUCCESS, REMOVE_SUCCESS } from '../actions';

const initialState = {
    smurfs: [],
    isFetching: true,
    error: '',
    isSaving: false,
    updated: false
};

const reducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case START_FETCHING:
            return {
                ...state,
                isFetching: true,
                error: '',
                updated: false
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                smurfs: action.payload,
                updated: false
            };
        case FETCH_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false,
                updated: false
            };
        case ADD_SUCCESS:
            return {
                ...state,
                updated: true
            };
        case REMOVE_SUCCESS:
            return {
                ...state,
                updated: true
            }

        default:
            return state;
    }
};

export default reducer;