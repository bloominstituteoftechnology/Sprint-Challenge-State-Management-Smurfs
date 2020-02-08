import{
    FETCH_SMURF_START,
    FETCH_SMURF_SUCCESS,
    FETCH_SMURF_FAILURE,
    NEW_SMURF_START,
    NEW_SMURF_SUCCESS,
    NEW_SMURF_FAILURE
} from "../actions"

const initialState ={
    smurf: [],
    isFetching: false;
    error: ""
}

export const Reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SMURF_START:
            return{...state, isFetching: true, error: ""};
        case FETCH_SMURF_SUCCESS:
            return{...state, isFetching: false, smurf: action.payload, error: "", };
        case FETCH_SMURF_FAILURE:
            return{...state, isFetching: false, error: action.payload}
        case NEW_SMURF_START:
            return{...state, isFetching: true};
        case NEW_SMURF_SUCCESS:
            return{...state, isFetching: false, smurf: action.payload};
        case NEW_SMURF_FAILURE:
            return {...state, isFetching: false, error: action.payload};
        default:
            return state;
    }
};