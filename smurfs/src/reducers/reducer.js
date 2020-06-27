import {
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_FAIL,
    ADD_START,
    ADD_SUCCESS,
    ADD_FAIL
    
} from "../actions/actions"

const initialState = {
    smurfs: [],
    isFetching: false,
    error: ""
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_START:
            return {
                ...state,
                isFetching: true
            }

        case FETCH_SUCCESS:
            console.log("Fetching was successful")
            return {
                ...state,
                smurfs: action.payload.data,
                isFetching: false,
                error: ""
            }

        case FETCH_FAIL:
            console.log("Fetching failed")
            return {
                ...state,
                isFetching: false,
                error: action.payload.error
            }

        case ADD_START:
            return {
                ...state,
                smurfs: action.payload
            }

        case ADD_SUCCESS:
            console.log("Adding was successful")
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false,
                error: ''
            }

        case ADD_FAIL:
            console.log("Adding failed")
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }

        default: {
                return {
                  ...state
                }
              }
    }

}