import {
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAIL,
  POST_SMURF_SUCCESS,
  POST_SMURF_FAIL,

} from "../actions/actions_index";

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  error: ""
}

const reducer = (state = initialState, action) => {

}

export default reducer;
