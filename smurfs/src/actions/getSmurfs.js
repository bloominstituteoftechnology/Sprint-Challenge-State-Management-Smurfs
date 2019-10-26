import axios from 'axios';
export const GET_SMURFS = 'GET_SMURFS';

export function getSmurfs() {
    return dispatch => {
        axios
            .get('http://localhost:3333/smurfs')
                .then((res) => {
                    // console.log(res.data)
                    dispatch({ type: GET_SMURFS, payload: res.data})
                })
                .catch((err) => {
                    console.log(err);
                })
    }
}