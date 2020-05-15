import axios from 'axios'

export let FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export let FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS'

export let fetchSmurfs = () => {
    return dispatch => {
        dispatch ({ type: FETCH_SMURFS_START});
        axios
            .get('http://localhost:3333/smurfs')
            .then(res => {
                console.log(res)
                dispatch ({ type: FETCH_SMURFS_SUCCESS, payload: res.data})
            })
            .catch(err => {
                console.log(err)
            })
    }
}