import {

    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAIL

} from '../store/actions'

const initialState = {

    smurfs: [],
    fetchingSmurfs: false,
    addingSmurf: false,
    error: false
}

export const smurfReducer = (state = initialState, action) => {

    switch (action.type) {

        case FETCH_DATA_START:
            return {
                ...state, 
                fetchingSmurfs: true,
                error: false
            }

        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                fetchingSmurfs: false,
                smurfs: action.payload
            }

        case FETCH_DATA_FAIL:
            return {

            }
        
        default:
            return state
    }

}