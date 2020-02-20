import React from 'react';
import axios from 'axios';

export const SMURF_DATA_START = 'SMURF_DATA_START';
export const SMURF_DATA_SUCCESS = 'SMURF_DATA_SUCCESS';

export const getSmurfData = () => dispatch => {
  dispatch ({ type: SMURF_DATA_START });

  axios
    .get('http://localhost:3333/smurfs')
    .then(res =>
      dispatch({
        type: SMURF_DATA_SUCCESS,
        payload: { name: res.data.value }
      })  
    )
    .catch(err => console.log(err));
};