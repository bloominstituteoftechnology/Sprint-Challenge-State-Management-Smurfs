import axios from 'axios';
import {useEffect} from 'react';

export const fetchData = () => dispatch => {
    useEffect(() => {
        axios
            .get('http://localhost:3333/smurfs')
                .then(response => {
                    dispatch({ type: 'FETCH', payload: response.data});
                })
    }, [dispatch]);
};

export const postData = smurf => dispatch => {
    axios.post('http://localhost:3333/smurfs', smurf)
        .then(response => {
        dispatch({ type: 'POST', payload: response.data});
        })
        .catch(function (error) {
        console.log(error);
        });
};
