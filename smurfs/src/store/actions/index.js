// ACTIONS ACTIONS ACTIONS

//ADD Smurf
export const ADD_SMURF = 'ADD_SMURF';
export const addSmurf = smurf => {
  console.log(smurf );
  return { type: ADD_SMURF, payload: smurf  };
};
