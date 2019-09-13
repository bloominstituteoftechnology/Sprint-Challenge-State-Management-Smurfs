// ACTIONS ACTIONS ACTIONS

//ADD Smurf
export const ADD_SMURF = 'ADD_SMURF';
export const addSmurf = feature => {
  console.log(feature);
  return { type: ADD_SMURF, payload: feature };
};
