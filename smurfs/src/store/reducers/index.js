import { FETCH_DATA_BEGIN, FETCH_DATA_YAY, FETCH_DATA_BOO, POST_NEWSMURF_YAY, POST_NEWSMURF_BOO, POST_NEW_SMURF } from '../actions';


const initialState = {
    smurfs: [],
    fetchingSmurf: false,
    isLoading: false,
    addingSmurf: false,
    error: ''
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_BEGIN: 
            return {
                ...state,
                isLoading: true,
                fetchingSmurf: true,
                error: ''
            };
        case FETCH_DATA_YAY: 
            return {
                ...state,
                isLoading: false,
                fetchingSmurf: false,
                smurfs: action.payload,
                error: ''
            };
        case FETCH_DATA_BOO:
            return {
                ...state,
                isLoading: false,
                fetchingSmurf: false,
                error: action.payload
            };
        case POST_NEW_SMURF:
            return {
                ...state,
                addingSmurf: true, 
                error: action.payload
            }
        case POST_NEWSMURF_YAY:
            const newSmurf = {
                name: action.payload,
                age: action.payload,
                height: action.payload,
                id: Date.now()
            }
            return { ...state, 
            addingSmurf: true,
            smurfs: [...state.smurfs, newSmurf]};
        case POST_NEWSMURF_BOO: 
            return {
                ...state,
                addingSmurf: false, 
                error: action.payload,
                fetchingSmurf: false
            }
        default: 
            return state;
    }
}

export default reducer;