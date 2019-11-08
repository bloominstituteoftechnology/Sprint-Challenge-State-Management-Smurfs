import { ADD_SMURF_START, FETCH_SMURF_START, FETCH_SMURF_SUCCESS, ADD_SMURF_SUCCESS, FETCH_SMURF_FAIL,
    } from '../actions';

const initialState = {

    smurfs: [],
    fetchingSmurfs: false,
    error: '',
    addingSmurfs: false,
  
    ///////////////////
     message: null,
     isFetching: false,


    
};



export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SMURF_START:

                // state.map(item => { });

            return{
                ...state,
                fetchingSmurfs: true,
                error: ''   
                
            }

        case FETCH_SMURF_SUCCESS:
            return{
                ...state,
                smurfs: action.payload,
                fetchingSmurfs: false,
                error: ''
                
            }

        case ADD_SMURF_START:
            return{
                ...state,
                 addingSmurfs: true,
                 error: ''
            }

        case ADD_SMURF_SUCCESS:
            return{
               ...state,
               smurfs: action.payload,
                addingSmurfs: false,
                error: ''
            }


    //FETCH FAIL
            case FETCH_SMURF_FAIL:
                    return{
                       ...state,
                        addingSmurfs: false,
                        error: ''
                    }                      

    default: 
    return state;
    };
};