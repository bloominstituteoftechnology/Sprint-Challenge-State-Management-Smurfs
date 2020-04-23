import axios from 'axios';

export const fetchInfo = () => {
    return (dispatch) => {
        dispatch({
            type: 'FETCH_INFO_START',
        });
        axios
            .get('http://localhost:3333/smurfs')
            .then((res) => {
                console.log('Results of axios.get', res.data);
                dispatch({
                    type: 'FETCH_INFO_SUCCESS',
                    payload: res.data,
                });
            })
            .catch((error) => {
                console.error(error);
            });
    };
};

export const pushInfo = (smurf) => {
    return (dispatch) => {
        dispatch({
            type: 'POST_INFO_START',
        });
        axios
            .post('http://localhost:3333/smurfs', smurf)
            .then((res) => {
                // console.log('Results of axios.post', res);
                dispatch({
                    type: 'POST_INFO_SUCCESS',
                    payload: res.data,
                });
            })
            .catch((error) => {
                console.error(error);
                dispatch({
                    type: 'POST_INFO_FAILURE',
                    payload: error,
                });
            });
    };
};
