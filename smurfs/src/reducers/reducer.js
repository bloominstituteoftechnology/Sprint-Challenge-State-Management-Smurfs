import {FETCH_SMURFS, GET_SMURFS, GET_SMURFS_FAIL, ADD_SMURFS} from "../actions/index";
export const initialState = [
   {
    isFetching: false,
    error: "",
    name: "Brainey",
    age: 200,
    height: "5cm",
    id: 0
   }
];




export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SMURFS:
            return {
                ...state,
                isFetching: true
            }
        case GET_SMURFS:
            return {
                ...state,
                name: action.payload,
                error: "",
                name: action.payload,
                age: action.payload,
                height: action.payload,
                id: action.payload

            }
        case GET_SMURFS_FAIL:
            return {
                ...state,
                error: action.payload,
                isFetching: false
        }
        case ADD_SMURFS:
        return {
            ...state,
            name: action.payload,
            age: action.payload,
            height: action.payload,
            id: action.payload
        }
        
        default: 
            return state


    }

}

export default reducer