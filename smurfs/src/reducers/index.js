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
  return null
};

export default reducer;