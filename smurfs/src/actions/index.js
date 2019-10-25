import axios from 'axios';

//set action types 
export const SMURF_DATA_START = "SMURF_DATA_START";
export const SMURF_DATA_SUCCESS = "SMURF_DATA_SUCCESS";


//set action creator with Thunk
//put API call here
export const fetchSmurfData = () => {
    return function(dispatch){
        dispatch({type: SMURF_DATA_START});

            axios
            .get('http://localhost:3333/smurfs')
            .then(res => {
                dispatch({
                    type: SMURF_DATA_SUCCESS,
                    payload: res.data
            });
            })
            .catch(err => {
                console.log(err);
                
            })
    };
};

