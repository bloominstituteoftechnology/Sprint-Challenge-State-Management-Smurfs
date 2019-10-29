import axios from "axios";

export const SMURF_NAME = 'SMURF_NAME';
export const SMURF_NAME_SUCCESS = 'SMURF_NAME_SUCCESS';
export const SMURF_NAME_ERROR = 'SMURF_NAME_ERROR';
// export const SMURF_AGE = 'SMURF_AGE';
// export const SMURF_HEIGHT = 'SMURF_HEIGHT';
// export const SMURF_ID = 'SMURF_ID'

export const smurfy = () => dispatch => {
    dispatch({ type: SMURF_NAME });

        axios 
        .get('http://localhost:3333/smurfs')
        .then(resp => {
            console.log(resp.data)
            dispatch ({ type: SMURF_NAME_SUCCESS, payload: resp.data });
            // dispatch ({ type: SMURF_AGE, payload: resp.data });
            // dispatch ({ type: SMURF_HEIGHT, payload: resp.data });
            // dispatch ({ type: SMURF_ID, payload: resp.data });
        })
        .catch(err => {
            dispatch({ type: SMURF_NAME_ERROR, payload: err.response });
        })

    handleSubmit(newSmurf, { setStatus, resetForm }) {
        axios.post("http://localhost:3333/smurfs", newSmurf)
            .then((res) => {
                console.log(res.data)
                setStatus(res.data)
                console.log(setStatus(res.data))
                resetForm();
            })
            .catch((err) => {
                console.log('Error:', err);
            })
    }
 }