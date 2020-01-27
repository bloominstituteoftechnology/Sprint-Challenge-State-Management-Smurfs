import {
	FETCHING_SMURFS_START,
	FETCHING_SMURFS_SUCCESS,
	FETCHING_SMURFS_FAILURE,
	ADD_SMURF_SUCCESS,
	ADD_SMURF_START,
	ADD_SMURF_FAILURE
} from '../actions';

export const initialState = {
	isLoading: false,
	village: [],
	error: false
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCHING_SMURFS_START:
			return {
				...state,
				isLoading: true
			};

		case FETCHING_SMURFS_SUCCESS:
			console.log('yo', action.payload);
			return {
				...state,
				isLoading: false,
				village: action.payload
			};
		case FETCHING_SMURFS_FAILURE:
			return {
				...state,
				error: true
			};
		case ADD_SMURF_START:
			return {
				...state,
				isLoading: true
			};

		case ADD_SMURF_SUCCESS:
			console.log('reducer payload', action.payload);
			return {
				...state,
				isLoading: false,
				village: action.payload.data
			};
		case ADD_SMURF_FAILURE:
			return {
				...state
			};

		default:
			return state;
	}
};
