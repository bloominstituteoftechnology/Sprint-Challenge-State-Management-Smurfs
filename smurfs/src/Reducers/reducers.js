//set intialState reducer
const initialState = {
  smurf: [],
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
      return { ...state, isFetching: false, smurf: action.payload };
    //this case created for if pulling from api is not successful
    case FETCH_SMURF_FAILURE:
      return { ...state, isFetching: false };
    //case to add new smurf
    case NEW_SMURF_START:
      return { ...state, isFetching: true };
    //case created fr when adding new smurf is successful , and to complete action when successful
    case NEW_SMURF_SUCCESS:
      return { ...state, isFetching: false, smurf: action.payload };
    //case created for if adding smurfs fails
    case NEW_SMURF_FAILURE:
      return { ...state, isFetching: false };
    default:
      return state;
  }
};
