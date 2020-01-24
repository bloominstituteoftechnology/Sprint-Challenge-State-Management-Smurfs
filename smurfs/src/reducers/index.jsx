import {
	FETCHING_SMURFS_START,
	FETCHING_SMURFS_SUCCESS,
	FETCHING_SMURFS_FAILURE
} from '../actions';

export const initialState = {
	isLoading: false,
	village: {
		id: '',
		name: '',
		age: null,
		height: ''
	},
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
				village: {
					id: action.payload.id,
					name: action.payload.name,
					age: action.payload.age,
					height: action.payload.height
				}
			};
		default:
			return state;
	}
};
