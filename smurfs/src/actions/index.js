import axios from 'axios'; 

export const FETCH_DATA = "FETCH_DATA";
export const UPDATE_SMURFS = "UPDATE_SMURFS";
 export const SET_ERROR = "SET_ERROR";

export const getData = () => dispatch =>{
     dispatch({type:FETCH_DATA});
     axios
     .get("http://makeup-api.herokuapp.com/api/v1/products.json")
     .then(res => {
       console.log(res);
       dispatch({ type: UPDATE_SMURFS, payload: res.data });
     })
        .catch(err => {
            console.error ("error from fetching data from API", err);
            dispatch({type :SET_ERROR, payload:" error fetching data from the api"});
        });
    };