import {
    GET_SMURFS_START, 
    GET_SMURFS_SUCCESS, 
    GET_SMURFS_FAIL, 
    ADD_SMURFS_START, 
    ADD_SMURFS_SUCCESS, 
    ADD_SMURFS_FAIL

} from "../actions/index";

export const initialState = {
   
    isFetching: false,
    error: "",
    smurfs: [],
    isPosting: false
   
   
};




export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_SMURFS_START:
            return {
                ...state,
                smurfs: [],
                isFetching: true,
                error: ''
            }
        case GET_SMURFS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: "",
                smurfs: action.payload

            }
        case GET_SMURFS_FAIL:
            return {
                ...state,
                error: action.payload,
                isFetching: false
        }
        case ADD_SMURFS_START:
            return {
                ...state,
                isPosting: true,
            }
        case ADD_SMURFS_SUCCESS:
            return {
                ...state,
                isPosting: false,

            }
        case ADD_SMURFS_FAIL:
            return {
                ...state,
                error: action.payload,
                isPosting: false
        }
        
        default: 
            return state
    }

}

export default reducer