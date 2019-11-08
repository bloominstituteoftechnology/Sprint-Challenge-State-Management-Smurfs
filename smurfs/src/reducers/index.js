import {SMURFS_LOADING, SMURFS_SUCCESS, SMURFS_FAILED} from '../actions';

const intialState = {
    smurfs: []
}


function reducer(state = intialState, action){
    switch (action.type){
    case SMURFS_LOADING:
          return{
              ...state,
          };
    case SMURFS_SUCCESS:
          return{
              ...state,
              smurfs: action.payload
          };
    case SMURFS_FAILED:
        return{
            ...state,
            smurfs: [],
        }
        default:
            return state;

    }
}

export default reducer;


