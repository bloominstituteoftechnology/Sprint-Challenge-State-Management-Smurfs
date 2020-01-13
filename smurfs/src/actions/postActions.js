import { GET_SMURFS, ADD_SMURFS } from './actions';

export const fetchSmurfs = (dispatch) => {
    console.log('get');
        fetch(`http://localhost:3333/smurfs`)
        .then(res => res.json())
        .then(data => dispatch({
            type: 'GET_SMURFS',
            payload: smurf
        }));
    
}