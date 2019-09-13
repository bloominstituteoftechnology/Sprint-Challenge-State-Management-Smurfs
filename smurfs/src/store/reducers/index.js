import { ADD_SMURF } from '../actions';

const initialState = {
    
    smurfs: [
  {
    name: 'Brainey',
    age: 200,
    height: '5cm',
    id: 0
  }
]
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SMURF:
            return{
                ...state,
            }



    default: 
    return state;
    };
};