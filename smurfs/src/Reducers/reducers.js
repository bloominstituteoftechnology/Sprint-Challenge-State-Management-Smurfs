//import actions
import {
  FETCH_SMURF_START,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURF_FAILURE,
  NEW_SMURF_START,
  NEW_SMURF_SUCCESS,
  NEW_SMURF_FAILURE,
} from "../Actions/actions";

//set intialState reducer
const initialState = {
  smurfs: [],
  isFetching: false,
  error: "",
};

//create reducer and export
export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    //this case created to start API fetch
    case FETCH_SMURF_START:
      return { ...state, isFetching: true };
    //this case created to create an action if isFetching is successful
    case FETCH_SMURF_SUCCESS:
      return { ...state, isFetching: false, smurfs: action.payload };
    //this case created for if pulling from api is not successful
    case FETCH_SMURF_FAILURE:
      return { ...state, isFetching: false };
    //case to add new smurf
    case NEW_SMURF_START:
      return { ...state, isFetching: true };
    //case created fr when adding new smurf is successful , and to complete action when successful
    case NEW_SMURF_SUCCESS:
      return { ...state, isFetching: false, smurfs: action.payload };
    //case created for if adding smurfs fails
    case NEW_SMURF_FAILURE:
      return { ...state, isFetching: false };
    default:
      return state;
  }
};
