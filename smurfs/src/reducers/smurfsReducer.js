import {
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_FAILURE,
    ADD_SMURFS

  } from '../actions';

const initialState ={
    smurfs: [{
        name: '',
        age: null,
        height: '',
        id: null

    }],
    isFetching: false,
    error: ''
}

export default (state = initialState, action ) => {
    switch( action.type ) {

        case FETCH_START:
            return {
                ...state,
                isFetching: true

            }

        case FETCH_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false
            }

        case FETCH_FAILURE:
             return {
                 ...state,
                 error: action.payload,
                 isFetching: false
             }

        case ADD_SMURFS:
            return {
                ...state,
                smurfs: [...state.smurfs, {
                name: action.payload.name,
                age: action.payload.age,
                height: action.payload.height
                }
            ]
            }

        default: 
            return state;
    }

} 