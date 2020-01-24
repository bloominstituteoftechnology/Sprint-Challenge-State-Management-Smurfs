import { GET_START, GET_SUCCESS, GET_FAILED, SMURF_SUCCESS } from '../actions/index';


// initial state set here
const initialState = {
    smurf: [],
    errors: '',
    isFetching: false
}

export const reducer = ( state = initialState, action) => {
    switch(action.type){
        case GET_START:
            return{
                ...state,
                isFetching: true
            }
        case GET_SUCCESS:
            return {
                ...state,
                errors: '',
                isFetching: false,
                smurf: action.payload
            }
        case GET_FAILED:
            return {
                ...state,
                errors: "Smurf got loose!",
                isFetching: false
            }
        case SMURF_SUCCESS:
            const newSmurf = {
                ...action.payload,
                id: Date.now()
            }
            return {
                ...state,
                smurf: [
                    ...state.smurf, newSmurf
                ]
            }
        default:
            return state
    }
}

export default reducer;
