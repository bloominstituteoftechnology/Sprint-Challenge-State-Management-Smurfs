import axios from 'axios';

export const fetchInfo = () => {
    return (dispatch) => {
        dispatch({
            type: 'FETCH_INFO_START',
        });
        axios.get('http://localhost:3333/smurfs').then((res) => {
            console.log('Results of axios.get', res);
        });
    };
};
