import { FETCHING_SMURFS_DATA, FETCHING_SMURFS_SUCCESSFUL, FETCHING_SMURFS_FAILED, ADDING_SMURF_SUCCESSFUL, DELETE_SMURF_SUCCESSFUL } from '../actions/index';


const initialState = {
    smurfs: [],
    isFetching: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    
    switch(action.type) {

        case FETCHING_SMURFS_DATA:
            return {
                ...state,
                isFetching: true
            }

        case FETCHING_SMURFS_SUCCESSFUL:
            console.log('successful')
            return {
                ...state,
                smurfs: action.payload.data,
                isFetching: false,
                error: ''
            }

        case FETCHING_SMURFS_FAILED:
            return {
                ...state,
                isFetching: false,
                error: action.payload.error
            }

        case ADDING_SMURF_SUCCESSFUL:
            return {
                ...state,
                smurfs: action.payload.data
            }

        case DELETE_SMURF_SUCCESSFUL:
            return {
                ...state,
                smurfs: action.payload.data
            }

        default:
            return state

    }
}