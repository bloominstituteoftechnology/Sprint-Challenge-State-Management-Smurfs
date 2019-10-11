import {
    FETCH_SMURFS_START ,
    FETCH_SMURFS_SUCCESS,
    FETCH_SMURFS_FAILURE,
    POST_SMURFS_START ,
    POST_SMURFS_SUCCESS,
    POST_SMURFS_FAILURE
  } from '../actions';
  
  const initialState = {
    smurfs: [],
    isLoading: false,
    error: ''
  };
  
export const reducer = (state = initialState, action) => {
switch (action.type) {
    case FETCH_SMURFS_START:
    return {
        ...state,
        isLoading: true,
        error: ''
    };
    case FETCH_SMURFS_SUCCESS:
    return {
        ...state,
        smurfs: action.payload,
        isLoading: false,
        error: ''
    };
    case FETCH_SMURFS_FAILURE:
        return {
            ...state,
            smurfs: [],
            isLoading: false,
            error: 'UH OH! GET FAILED'
        };
    case POST_SMURFS_START:
        return {
            ...state,
            isLoading: true,
            error: ''
        };
    case POST_SMURFS_SUCCESS:
        return {
            ...state,
            smurfs: action.payload,
            isLoading: false,
            error: ''
        };
    case POST_SMURFS_FAILURE:
        return {
            ...state,
            isLoading: false,
            error: 'UH OH! POST FAILED'
        };
    default:
    return state;
    }
};
  