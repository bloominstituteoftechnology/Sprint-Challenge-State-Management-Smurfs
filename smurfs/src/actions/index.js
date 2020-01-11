import axios from 'axios';

export const START_SMURF_FETCH = "START_SMURF_FETCH";
export const SUCCESS_SMURF_FETCH = "SUCCESS_SMURF_FETCH";
export const FAIL_SMURF_FETCH = "FAIL_SMURF_FETCH";


export const getSmurfs = () => dispatch => {
        dispatch({
            type: START_SMURF_FETCH
        });

        axios
            .get("http://localhost:3333/smurfs")
            .then(res => {
                console.log('smurf res: ', res)
                dispatch({type: SUCCESS_SMURF_FETCH, payload: res.data})
            })
            .catch(err => dispatch({type: FAIL_SMURF_FETCH, payload: err}))
    }