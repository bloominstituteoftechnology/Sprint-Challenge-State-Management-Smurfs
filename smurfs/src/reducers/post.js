import { POST_SMURF_START, POST_SMURF_SUCCESS, POST_SMURF_ERROR } from '../actions/actionreducer';

const initialState = {
	smurf: [{
        name: '',
        height: '',
        age: ''
    }],
    isLoading: false,
    error: null
};

export function reducer(state = initialState, action) {
	switch (action.type) {
		case POST_SMURF_START:
			return {
				...state,
				isLoading: true
			};

		case POST_SMURF_SUCCESS:
			return {
				...state,
				smurf: action.payload,
				isLoading: false
			};

		case POST_SMURF_ERROR:
			return {
				...state,
				error: action.payload,
				isLoading: false
			};
		default:
			return state;
	}
}
