const initialState = {
  smurfs: [],
};

export function smurfReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_SMURFS":
      return {
        smurfs: action.payload,
      };

    case "SUBMIT_SMURF":
      console.log(state);
      return {
        smurfs: [...state.smurfs, action.payload],
      };
    case "DELETE_SMURF":
      return {
        smurfs: state.smurfs.filter((smurf) => smurf !== action.payload),
      };

    default:
      return state;
  }
}
