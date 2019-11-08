// import {
//   FETCH_SMURF_LOADING,
//   FETCH_SMURF_SUCCESS,
//   FETCH_SMURF_FAILED
// } from "../actions";

export const initialState = {
  smurfs: [{"name":"Brainey","age":200,"height":"5cm","id":0}],
  error: null,
  isFetching: false
};

export function reducer(state = initialState, action) {
  console.log("reducer", action);
  switch (action.type) {
    case "SET_SMURF":
      const newSmurf = {...action.payload, id:state.smurfs.length}
      console.log(newSmurf)
      return { ...state, smurfs: [...state.smurfs, newSmurf]};
    // case FETCH_SMURF_LOADING:
    //   return {
    //     ...state,
    //     isFetching: true,
    //     error: null
    //   };
    // case FETCH_SMURF_SUCCESS:
    //   return {
    //     ...state,
    //     SMURF: action.payload,
    //     isFetching: false,
    //     error: null
    //   };
    // case FETCH_SMURF_FAILED:
    //   return {
    //     ...state,
    //     SMURF: [],
    //     isFetching: false,
    //     error: action.payload
    //   };
    default:
      return state;
  }
}

 export default reducer;
