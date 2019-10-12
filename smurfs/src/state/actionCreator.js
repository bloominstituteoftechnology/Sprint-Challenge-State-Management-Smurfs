import * as types from "./actionTypes";
import axios from "axios";

const smurfAPI = "http://localhost:3333/smurfs";

export const setSmurf = smurfData => {
  return {
    type: types.GET_SMURF,
    payload: smurfData
  };
};

export const getSmurf = () => dispatch => {
  let smurfData;
  axios
    .get(smurfAPI)
    .then(response => {
      smurfData = response.data;
      dispatch(setSmurf(smurfData));
    })
    .catch(err => {
      console.log("There was an error: ", err);
    });
};

export const onFormChange = target => {
    return {
        type: types.ON_FORM_CHANGE,
        payload: {
            name: target.name,
            value: target.value
        }
    }
}

export const addNewSmurf = newSmurf => dispatch => {
    axios.post(smurfAPI, newSmurf)
    .then(response => {
        dispatch(setSmurf(response.data))
    })
    .catch(err => {
        console.log("There was an error with your API request", err)
    })
};
