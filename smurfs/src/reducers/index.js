import { FETCH_SMURF_START, FETCH_SMURF_SUCCESS, FETCH_SMURF_ERROR } from '../actions';
import {POST_SMURF_ERROR, POST_SMURF_START, POST_SMURF_SUCCESS} from "../actions";

const initialState = {
	smurf: [],
	isLoading: false,
	error: null
};

export function reducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_SMURF_START:
			return {
				...state,
				isLoading: true
			};

		case FETCH_SMURF_SUCCESS:
			return {
				...state,
				smurf: action.payload,
				isLoading: false
			};

		case FETCH_SMURF_ERROR:
			return {
				...state,
				error: action.payload,
				isLoading: false
			};

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
