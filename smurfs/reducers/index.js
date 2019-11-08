import {
	SMURF_LOAD,
	SMURF_SUCCESS,
	SMURF_FAILED
} from "../actions"

function clg(...x) {
	for (let exes of x) console.log(exes);
}

const initialState = {
	smurfList: [],
	error: null,
	isFetching: false
}

function reducer(state = initialState, action) {
	switch (action.type) {
		case SMURF_LOAD:
			return {
				...state,
				isFetching: true,
				error: null
			}
		case SMURF_SUCCESS:
			return {
				...state,
				smurfList: action.payload,
				isFetching: false,
				error: null
			}
		case SMURF_FAILED:
			return {
				...state,
				smurfList: [],
				isFetching: false,
				error: action.payload
			}
		default:
			return state;
	}
}

export default reducer;