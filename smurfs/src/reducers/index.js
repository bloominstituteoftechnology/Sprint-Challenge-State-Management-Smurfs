import {START, ADD, SUCCESS, FAILED} from '../actions/index';

const initialState ={

    isLoading: false,
    smurf: [],
    add: {
        name: "",
        age: "",
        height: ""
    },
    error: ""
}

export const reducer = (state = initialState, action) => {

    switch(action.type){
        case START:
        case SUCCESS:
        case ADD:
        case FAILED:
                
    }
}