import {
    FETCH_SMURFS_START,
    FETCH_SMURFS_SUCCESS,
    FETCH_SMURFS_FAIL
  } from '../actions/actions.js';
  // [
  //   {
  //     name: "Brainey",
  //     age: 200,
  //     height: "5cm",
  //     id: 0
  //   }
  // ];
  const initialState = {
    smurfs: []
  };
  
  function reducer(state = initialState, action) {
    console.log('reducer', action);
    switch (action.type) {
      case FETCH_SMURFS_START:
        return {
          ...state,
          isFetching: true,
          error: ''
        };
      case FETCH_SMURFS_SUCCESS:
            console.log('reducer success', action);
        return {
          ...state,
          smurfs: action.payload,
          isFetching: false,
          error: ''
        };
      case FETCH_SMURFS_FAIL:
        return {
          ...state,
          error: action.payload
        };
      default:
        return state;
    }
  }
  
  export default reducer;