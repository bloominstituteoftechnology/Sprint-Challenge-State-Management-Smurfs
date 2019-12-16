import axios from 'axios';


export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const ERROR = 'ERROR';


   export const getSmurf = () => dispatch => {
       dispatch({ type: FETCH_SMURF_START });
       axios
          .get('http://localhost:3333/smurfs')
         .then(res => {
             dispatch({ type: FETCH_SMURF_SUCCESS, payload:    res.data.name });
           })
            .catch(error => {
              dispatch({ type: ERROR, payload: error });
            });
};
      
export default getSmurf;