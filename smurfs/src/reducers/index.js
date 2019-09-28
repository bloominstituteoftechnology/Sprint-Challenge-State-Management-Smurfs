import {
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  POST_SMURF
} from "../actions";

const initialState = {
  name: "",
  age: 0,
  height: "",
  isLoading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURFS_START:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_SMURFS_SUCCESS:
      console.log("state", action.payload);
      return {
        ...state,
        name: action.payload.map(smurf => smurf),
        age: action.age,
        height: action.height,
        isLoading: false
      };
    case POST_SMURF:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default reducer;
