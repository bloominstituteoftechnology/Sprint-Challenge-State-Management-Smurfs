import {
    GET_SMURFS_START,
    GET_SMURFS_FINISH,
    GET_SMURFS_FAIL,
} from '../actions';

const initialState = {
    smurfs: [],
    fetchingSmurfs: false,
    fetchingSmurfsError: {
        status: null,
        message: null,
    },
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SMURFS_START:
            return {
                ...state,
                fetchingSmurfs: true,
            };

        case GET_SMURFS_FINISH:
            return {
                ...state,
                smurfs: action.payload,
                fetchingSmurfs: false,
            };

        case GET_SMURFS_FAIL:
            return {
                ...state,
                fetchingSmurfs: false,
                fetchingSmurfsError: {
                    ...state.fetchingSmurfsError,
                    status: action.payload.status,
                    message: action.payload.statusText,
                },
            };

        default:
            return state;
    }
};

export { rootReducer };
