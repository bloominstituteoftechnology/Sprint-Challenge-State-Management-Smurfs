import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE, START_PUSHING, PUSH_SUCCESS, PUSH_FAILURE } from "../actions";

const initialState = {
    smurfData: [],
    isFetching: false,
    error: "",
    isPushing: false
};

const reducer = (state = initialState, action) => {
    console.log("Reducer function:", state, action);
    switch (action.type) {

        case START_FETCHING:
            return {
                ...state,
                isFetching: true,
                error: ""
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                smurfData: action.payload,
                isFetching: false,
                error: ""
            };
        case FETCH_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };

        case START_PUSHING:
            return {
                ...state,
                isPushing: true,
                error: ""
            };
        case PUSH_SUCCESS:
            return {
                ...state,
                isPushing: false,
                smurfData: action.payload,
                error: ""
            };
        case PUSH_FAILURE:
            return {
                ...state,
                isPushing: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default reducer;