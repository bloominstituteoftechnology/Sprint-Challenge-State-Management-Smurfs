import axios from "axios";

export const SMURF_NAME = 'SMURF_NAME';
export const SMURF_NAME_SUCCESS = 'SMURF_NAME_SUCCESS';
export const SMURF_NAME_ERROR = 'SMURF_NAME_ERROR';

export const smurfy = () => {
     return dispatch => {
     dispatch({ type: SMURF_NAME });

        axios 
        .get('http://localhost:3333/smurfs')
        .then(res => {
            console.log(res.data)
            dispatch ({ type: SMURF_NAME_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: SMURF_NAME_ERROR, payload: err.res });
        })
     }
}

    export const addSmurf = (newSmurf) => {
        return dispatch => {
        axios
        .post("http://localhost:3333/smurfs", newSmurf)
            .then((res) => {               
                dispatch({ type: SMURF_NAME_SUCCESS, payload: res.data });               
            })
            .catch((err) => {
                dispatch({ type: SMURF_NAME_ERROR, payload: err.response });
                console.log('Error:', err);
            })
        }
    }
