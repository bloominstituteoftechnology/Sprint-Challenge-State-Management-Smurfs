import axios from 'axios';

export const POST_NEWSMURF_YAY = 'POST_NEWSMURF_YAY';
export const POST_NEWSMURF_BOO = 'POST_NEWSMURF_BOO';
export const POST_NEW_SMURF = 'POST_NEW_SMURF';

export const postSmurf = newSmurf => dispatch => {
    dispatch({ type: POST_NEW_SMURF });

    return (
        axios
            .post(`http://localhost:3333/smurfs`, newSmurf)
            .then(response => {
                console.log('POST MESSAGE', response.data)
                // dispatch({ type: POST_NEWSMURF_YAY, PAYLOAD: response.data})
            })
            .catch(error => {
                dispatch({ type: POST_NEWSMURF_BOO, payload: error.response })
            })
    );    
};