import { FETCH_SMURF_START, FETCH_SMURF_SUCCESS, FETCH_SMURF_FAILURE } from "../actions";

const intitialState = {
	smurfs: [{ name: '', age: null, height: ''}],
	isFetching: false,
	error: ''
}

export const smurfReducer = (state = intitialState, action) => {
	switch(action.type) {
	case FETCH_SMURF_START:
		return {
			...state,
			isFetching: true,
		}
	case FETCH_SMURF_SUCCESS:
		return {
			smurfs: action.payload,
			isFetching: false,
			error: ''
		}
	case FETCH_SMURF_FAILURE:
		return {
			...state,
			isFetching: false,
			error: action.payload
		}
	default:
		return state;
	}
}