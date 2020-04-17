import axios from 'axios';

export const FETCH_DATA_BEGIN = 'FETCH_DATA_BEGIN';
export const FETCH_DATA_YAY = 'FETCH_DATA_YAY';
export const FETCH_DATA_BOO = 'FETCH_DATA_BOO'

export const fetchData = () => {
    return dispatch => {
        dispatch({ type: FETCH_DATA_BEGIN});
        axios
            .get('http://localhost:3333/smurfs')
            .then(response => {
                console.log('fetch data', response)
                dispatch ({ type: FETCH_DATA_YAY, payload: response.data });
            })
            .catch(error=> {
                dispatch({ type: FETCH_DATA_BOO, payload: error.response});
            });
    };
};