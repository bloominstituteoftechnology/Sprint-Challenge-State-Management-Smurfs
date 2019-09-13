import { ADD_SMURF_START, FETCH_SMURF_START, FETCH_SMURF_SUCCESS, ADD_SMURF_SUCCESS  } from '../actions';

const initialState = {
    
    smurfs: [],
    fetchingSmurfs: false,
    error: '',
    addingSmurfs: false
  
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SMURF_START:
            return{
                ...state,
                error: '',
                fetchingSmurfs: true
            }

        case FETCH_SMURF_SUCCESS:
            return{
                ...state,
                error: '',
                fetchingSmurfs: false,
                smurfs: action.payload
            }

        case ADD_SMURF_START:
            return{
                ...state,
                 error: '',
                 addingSmurfs: true
                
            }

        case ADD_SMURF_SUCCESS:
            return{
               ...state,
                error: '',
                addingSmurfs: false,
                smurfs: action.payload
            }




    default: 
    return state;
    };
};