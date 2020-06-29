
import {FETCH_BEGIN,FETCH_FAIL,FETCH_SUCCESS, GRAB_LIST, SEND_BEGIN, SEND_FAIL, SEND_SUCCESS, } from "../actions";

const initialState = {
    smurfs: []
}




function reducer(state = initialState, action){
    switch(action.type){
        case FETCH_BEGIN:
            return state;
        case FETCH_SUCCESS:
            return {
                smurfs: action.payload
            }
        case GRAB_LIST:
            console.log('state is ', state);
            console.log('first smirf ', state.smurfs[0])
            return state;
        case SEND_BEGIN:
            console.log('inside send begin')
            return state;
        case SEND_SUCCESS:
            console.log('inside send success')
            return {
                smurfs:  action.payload
            }
        default:
            return state;
    }

}



export default reducer;