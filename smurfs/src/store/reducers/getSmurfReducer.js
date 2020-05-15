import { FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS } from '../actions';

export let initialState = {
    isFetching: false, 
    error: '',
    smurfs: [],
    showData: false
    
}

export let getSmurfReducer = (state = initialState, action) => {
    // console.log(action, 'action loggin inside reducer')
    switch ( action.type) {
        case FETCH_SMURFS_START:
            return {
                ...state,
                isFetching: true
            }
        case FETCH_SMURFS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                showData: true,
                smurfs: [
                    ...state.smurfs, 
                    action.payload
                ]
            }
        default:
            return state
    }
}