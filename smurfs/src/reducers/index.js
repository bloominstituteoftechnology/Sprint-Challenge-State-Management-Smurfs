import {
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_START,
  FETCH_SMURFS_NAME,
  POST_SMURF,
  FETCH_SMURFS_AGE,
  FETCH_SMURFS_HEIGHT
} from "../actions";

const initialState = {
  smurf: [{}]
  // name: "",
  // age: 0,
  // height: "",
  // isLoading: false
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
        smurf: action.payload
      };
    // case FETCH_SMURFS_NAME:
    //   console.log("state", action.payload);
    //   return {
    //     ...state,
    //     name: action.payload
    //   };
    // case FETCH_SMURFS_AGE:
    //   console.log("state", action.payload);
    //   return {
    //     ...state,
    //     age: action.payload
    //   };
    // case FETCH_SMURFS_HEIGHT:
    //   console.log("state", action.payload);
    //   return {
    //     ...state,
    //     height: action.payload
    //   };
    case POST_SMURF:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default reducer;
