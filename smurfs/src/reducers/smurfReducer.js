import { FETCH_SMURF_START, FETCH_SMURF_SUCCESS, FETCH_SMURF_FAILURE, POST_SMURF_START, POST_SMURF_SUCCESS, POST_SMURF_FAILURE } from "../actions";

const intitialState = {
	smurfs: null,
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

// const postInitialState = {
// 	smurf: null,
// 	isPosting: false,
// 	error: ''
// }

// export const postSmurfReducer = (state = postInitialState, action) => {
// 	switch(action.type) {
// 	case POST_SMURF_START:
// 		return {
// 			...state,
// 			isPosting: true,
// 		}
// 	case POST_SMURF_SUCCESS:
// 		return {
// 			...state,
// 			isPosting: false
// 		}
// 	case POST_SMURF_FAILURE:
// 		return {
// 			...state,
// 			isPosting: false,
// 			error: action.payload
// 		}
// 	}
// }