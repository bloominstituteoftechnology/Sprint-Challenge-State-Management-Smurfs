import {
	SMURF_LOAD,
	SMURF_SUCCESS,
	SMURF_FAILED,

	WRITE_TRY,
	WRITE_SUCCESS,
	WRITE_FAILED ,

	DEL_TRY,
	DEL_SUCCESS,
	DEL_FAILED
} from "../actions"

function clg(...x) {
	for (let exes of x) console.log(exes);
}

const initialState = {
	smurfList: [],
	error: null,
	isWorking: false
}

function reducer(state = initialState, action) {
	switch (action.type) {
		case SMURF_LOAD:
			return {
				...state,
				isWorking: true,
				error: null
			}
		case SMURF_SUCCESS:
			return {
				...state,
				smurfList: action.payload,
				isWorking: false,
				error: null
			}
		case SMURF_FAILED:
			return {
				...state,
				smurfList: [],
				isWorking: false,
				error: action.payload
			}

		case WRITE_TRY:
			return {
				...state,
				isWorking: true,
				error: null
			}
		case WRITE_SUCCESS:
			return {
				...state,
				smurfList: action.payload,
				isWorking: false,
				error: null
			}
		case WRITE_FAILED:
			return {
				...state,
				smurfList: [],
				isWorking: false,
				error: action.payload
			}

		case DEL_TRY:
			return {
				...state,
				isWorking: true,
				error: null
			}
		case DEL_SUCCESS:
			return {
				...state,
				smurfList: action.payload,
				isWorking: false,
				error: null
			}
		case DEL_FAILED:
			return {
				...state,
				smurfList: [],
				isWorking: false,
				error: action.payload
			}
		default:
			return state;
	}
}

export default reducer;