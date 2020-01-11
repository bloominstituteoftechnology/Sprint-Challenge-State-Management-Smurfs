const initialState = {
	smurfs: [],
	isGetting: false,
	isAdding: false,
	error: ''
};

export const smurfReducer = (state = initialState, action) => {
     switch(action.type) {
		case 'GET_SMURF': 
			return { ...state, isGetting: true };
		case 'GET_WORKED':
			return { ...state, isGetting: false, smurfs: action.payload };
        case 'GET_FAILED':
            return { ...state, isGetting: false, error: action.payload };
        case 'ADD_SMURF':
            return { ...state, isAdding: true };
        case 'POST_SMURF':
            return { ...state, isAdding: false, smurfs:[...state.smurfs, action.payload ] };
        case 'POST_FAILED':
            return { ...state, isGetting: false, isAdding: false, error: action.payload };
        default: return state;
    };
};