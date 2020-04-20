import * as types from "./actionTypes";
import axios from "axios";

const smurfsAPI = "http://localhost:3333/smurfs";

export function increment() {
  return {
    type: types.INCREMENT
  };
}

export function decrement() {
  return {
    type: types.DECREMENT
  };
}

export function reset() {
  return {
    type: types.RESET
  };
}

export function changeInput(target) {
  return {
    type: types.ON_INPUT_CHANGE,
    payload: {
      name: target.name,
      value: target.value
    }
  };
}

export function fetchSmurfs(data) {
  return {
    type: types.GET_SMURF,
    payload: data
  };
}

export const fetchSmurfAPI = () => dispatch => {
  axios
    .get(smurfsAPI)
    .then(response => {
      const data = response.data;
      console.log(response.data[0].name);
      dispatch(fetchSmurfs(data));
    })
    .catch(error => {
    });
};

export const getFormValue = event => {
  if (event.target.name === "age") {
    return {
      type: types.ON_INPUT_CHANGE,
      payload: { name: event.target.name, value: Number(event.target.value) }
    };
  }
  return {
    type: types.ON_INPUT_CHANGE,
    payload: { name: event.target.name, value: event.target.value }
  };
};

export const postSmurfs = smurf => dispatch => {
  const params = {
    name: smurf.name,
    age: smurf.age,
    height: smurf.height
  };
  axios.post(smurfsAPI, params).then(res => {
    console.log(res.data);
    dispatch(fetchSmurfs(res.data));
    dispatch({ type: types.ON_SUBMIT });
  });
};