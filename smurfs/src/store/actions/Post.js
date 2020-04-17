import axios from 'axios';

export const POST_NEWSMURF_YAY = 'POST_NEWSMURF_YAY';
export const POST_NEWSMURF_BOO = 'POST_NEWSMURF_BOO';

export const postSmurf = newSmurf => dispatch => {
    axios
        .post('http://localhost:3333/smurfs', newSmurf)
        .then(response => {
            dispatch({ type: POST_NEWSMURF_YAY, PAYLOAD: response.data.results})
        })
        .catch(error => {
            dispatch({ type: POST_NEWSMURF_BOO, payload: error.response })
        });
};