import axios from 'axios'; 

export const FETCH_DATA = "FETCH_DATA";
export const UPDATE_SMURFS = "UPDATE_SMURFS";
export const SET_ERROR = "SET_ERROR";

export const getData = () => dispatch =>{
     dispatch({ type: FETCH_DATA });
     axios
     .get(`http://localhost:3333/smurfs`)
     .then(res => {
       console.log("Data coming back in actions API call", res);
       dispatch({ type: UPDATE_SMURFS, payload: res.data });
     })
        .catch(err => {
            console.error ("error from fetching data from API", err);
            dispatch({type :SET_ERROR, payload:" error fetching data from the api"});
        });
    };