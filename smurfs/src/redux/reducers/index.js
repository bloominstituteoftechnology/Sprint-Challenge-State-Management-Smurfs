import {
    GET_SMURFS_START,
    GET_SMURFS_FINISH,
    GET_SMURFS_FAIL,
    ADD_SMURFS_START,
    ADD_SMURFS_FINISH,
    ADD_SMURFS_FAIL,
} from '../actions';

const initialState = {
    smurfs: [],
    fetchingSmurfs: false,
    fetchingSmurfsError: {
        status: null,
        message: null,
    },
    addingSmurf: false,
    addingSmurfError: {
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
        case ADD_SMURFS_START:
            return {
                ...state,
                addingSmurf: true,
            };

        case ADD_SMURFS_FINISH:
            console.log(action);
            return {
                ...state,
                smurfs: action.payload, // this is the worse thing I've ever seen written from the DB perspective
                addingSmurf: false,
            };

        case ADD_SMURFS_FAIL:
            return {
                ...state,
                addingSmurfs: false,
                addingSmurfsError: {
                    ...state.addingSmurfsError,
                    status: action.payload.status,
                    message: action.payload.statusText,
                },
            };

        default:
            return state;
    }
};

export { rootReducer };
