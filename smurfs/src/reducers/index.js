import { GET_SMURFS, GET_SMURFS_SUCCESS, GET_SMURFS_FAILURE } from '../actions';

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SMURFS:
            
    return {
        ...state,
        fetchingSmurfs: true,
        error: null
    }

case GET_SMURFS_SUCCESS:
return {
    ...state,
    smurfs: action.payload,
    fetchingSmurfs: false
}

case GET_SMURFS_FAILURE:
    return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
    }
    default:
        return state;
}
};

export default reducer;