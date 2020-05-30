export const UPDATE_SMURFS = "UPDATE_SMURFS";
export const ADD_SMURF = "ADD_SMURF";
export const DELETE_SMURF = "DELETE_SMURF";
export const EDIT_SMURF = "EDIT_SMURF";

export const initialState = {
  smurfs: [
    {
      name: "name from reducer",
      age: 12,
      height: 1.7,
      editing: false,
    },
  ],
};

export const smurfReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_SMURFS:
      return {
        ...state,
        smurfs: [action.payload],
      };
    default:
      return state;
  }
};
