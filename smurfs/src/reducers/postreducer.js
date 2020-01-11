import { POST_SMURF_START, POST_SMURF_SUCCESS, POST_SMURF_ERROR } from '../actions/actionreducer';

const initialState = {
	smurf: null,
	post: false,
	error: null
};

export function postReducer(state = initialState, action) {
	switch (action.type) {
		case POST_SMURF_START:
			return {
				...state,
				post: true
			};

		case POST_SMURF_SUCCESS:
			return {
				...state,
				post: true,
				smurf: action.payload
			};

		case POST_SMURF_ERROR: {
			return {
				...state,
				post: false,
				error: action.payload
			};
		}
		default:
			return state;
	}
}
