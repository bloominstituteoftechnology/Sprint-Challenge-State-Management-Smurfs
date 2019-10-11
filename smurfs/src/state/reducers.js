import * as types from './actionTypes';

const initialState = [
    {
        "name": "Brainey",
        "age": 200,
        "height": "5cm",
        "id": 0
    }
]

const smurfReducer = (state=initialState, action) => {
    switch(action.type){
        case types.ADD_NEW_SMURF:
            return {
                ...state
            }

        default:
            return state;

    }
}