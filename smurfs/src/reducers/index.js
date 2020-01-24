const initialState = {
  isLoading: false,
  smurfs: []
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHING_SMURFS_START":
      return {
        ...state,
        isLoading: true
      };
    case "FETCHING_SMURFS_SUCCESS":
      return {
        ...state,
        isLoading: false,
        smurfs: action.payload
      };
    case "ADDING_SMURF":
      return {
        ...state,
        isLoading: true
      };
    case "ADD_SMURF":
      return {
        ...state,
        isLoading: false,
        smurfs: [...state.smurfs]
      };
    default:
      return state;
  }
};
