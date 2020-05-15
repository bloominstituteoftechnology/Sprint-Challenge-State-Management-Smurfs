import axios from 'axios'

export let FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export let FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS'

export let fetchSmurfs = () => {
    return dispatch => {
        dispatch({ type: FETCH_SMURFS_START });
        setTimeout(() => {
            axios
            .get('http://localhost:3333/smurfs')
            .then(res => {
                console.log(res, 'inside res')
                dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data })
            })
            .catch(err => {
                console.log(err)
            })
        }, 5000)

    }
}

export let POST_DATA = 'POST_DATA';

export let postData = input => dispatch => {

    axios
    .post('http://localhost:3333/smurfs', input)
    .then(res => console.log(res))
}