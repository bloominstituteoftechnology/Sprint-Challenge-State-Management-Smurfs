import { PREPARE_DATA, SMURFS_LOADING_SUCCESS, SET_ERROR } from "../actions";

const initialState = {
	isLoading: false,
	smurfs: [],
	error: "",
};

export const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case PREPARE_DATA:
			return {
				...state,
				isLoading: true,
			};
		case SMURFS_LOADING_SUCCESS:
			return {
				...state,
				isLoading: false,
				smurfs: action.payload,
			};
		case SET_ERROR:
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
