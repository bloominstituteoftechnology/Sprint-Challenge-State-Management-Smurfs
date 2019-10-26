import { FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FETCHING, FETCH_SMURFS_ERROR } from './../actions/smurfs'
const intState = {
    error: null,
    data: null,
    isLoading: false
}

export function reducer(state= intState, action){
    switch(action.type){
        case FETCH_SMURFS_FETCHING:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_SMURFS_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false
            }
        case FETCH_SMURFS_FETCHING:
            return {
                ...state,
                data: action.payload,
                isLoading: false
            }
    }
    return state
}