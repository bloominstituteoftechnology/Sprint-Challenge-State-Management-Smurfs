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
                console.log("Smurf Data: ",res);
                const smurfData = {};
                smurfData.name = res.data.name;
                dispatch({
                    type: SMURF_DATA_SUCCESS,
                    payload: smurfData
            });
            })
            .catch(err => {
                console.log(err);
                
            })
    };
};