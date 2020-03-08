import { POST_SMURF_START, POST_SMURF_SUCCESS, POST_SMURF_ERROR } from '../actions/actionreducer';

const initialState = {
	post: false,
	success: null,
	error: null
};

export function reducer(state = initialState, action) {
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
				success: action.payload
			};

		case POST_SMURF_ERROR:
			return {
				...state,
				post: false,
				error: action.payload
			};
		default:
			return state;
	}
}
