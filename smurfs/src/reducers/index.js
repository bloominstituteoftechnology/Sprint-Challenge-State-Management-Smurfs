import {
    FETCH_POSTS,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAIL,
    ADD_POST, 
   
  } from '../actions';

  const initialState = {
    smurfs: [],
    isFetching: false,
    error: ""
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_POSTS:
            return {
                ...state,
                isFetching: true
            }

        case FETCH_POSTS_SUCCESS:
            return {
                ...state,
                smurfs: action.payload.data,
                isFetching: false,
                error: ""
            }

        case FETCH_POSTS_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload.error
            }

        case ADD_POST:
            return {
                ...state,
                smurfs: action.payload.data
            }
        default:
            return state
    }
} 
        
    export default reducer; 