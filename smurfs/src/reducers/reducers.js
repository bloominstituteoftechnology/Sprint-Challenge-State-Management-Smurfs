import { FETCHING_SMURFS_START, FETCHING_SMURFS_SUCCESS, FETCHING_SMURFS_FAILURE, ADDING_SMURF_SUCCESS } from "../actions/actions"

const initialState = {
    smurfs: [],
    isFetching: false,
    error: ""
}

export const reducer = (state = initialState, action) => {
    switch(action.type){

        case FETCHING_SMURFS_START:
            return {
                ...state,
                isFetching: true
            }

        case FETCHING_SMURFS_SUCCESS:
            console.log("success")
            return {
                ...state,
                smurfs: action.payload.data,
                isFetching: false,
                error: ""
            }

        case FETCHING_SMURFS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload.error
            }

        case ADDING_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: action.payload.data
            }
        default:
            return state
    }
}