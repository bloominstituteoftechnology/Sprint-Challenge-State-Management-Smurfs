import {
    GET_SMURFS_START,
    GET_SMURFS_SUCCESS,
    GET_SMURFS_FAIL,
    POST_SMURF_SUCCESS,
    POST_SMURF_FAIL
  } from "../actions";

const initialState = {
   smurfs:  [],
   fetchingSmurfs: false,
   addingSmurf: false,
   error:""
};

const reducer = (state = initialState, action) => {
    console.log("initialstate", initialState)
    console.log("reducer", action)
    switch(action.type){
        case GET_SMURFS_START:
            return {
                ...state, fetchingSmurfs: true
            }
        case GET_SMURFS_SUCCESS:
            return {
                ...state, 
                smurfs: action.payload,
                fetchingSmurfs: false,
                error:""
            }
        case GET_SMURFS_FAIL:
            return {
                ...state,
                fetchingSmurfs: false,
                error: action.payload
            };
        case POST_SMURF_SUCCESS:
            const newSmurf = {
                name: action.payload,
                location: "",
                id: Date.now()
            };
            return { ...state, smurfs: [...state.smurfs, newSmurf] };
        case POST_SMURF_FAIL:
            return {
                ...state,
                addingSmurf: false,
                error: action.payload,
                fetchingSmurfs: false
            };
        default: return
    }
}

export default reducer;