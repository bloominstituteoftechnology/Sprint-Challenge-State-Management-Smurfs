import axios from 'axios';

export const GET_DATA = "GET_DATA";
export const UPDATE_lIST = "UPDATE_LIST";
export const RECIEVE_DATA = "RECIEVE_DATA";
export const DATA_SUCCESS = "DATA_SUCCESS"

export const getData = () => dispatch => {
    dispatch({type: GET_DATA});
    setTimeout(()=> {
          axios
        .get("http://localhost:3333/smurfs")
        .then(res => {
            console.log(res)
            dispatch({type: UPDATE_lIST, payload: res.data});
        })
        .catch(err => console.log('error fetching data from api. err: ', err));  
    }, 1000)

};

export const giveData = props => dispatch =>{
    dispatch({type: RECIEVE_DATA});
    setTimeout(()=>{
           axios
        .post("http://localhost:3333/smurfs",props)
        .then(res =>{
            console.log(res);
            dispatch({type: DATA_SUCCESS, payload: res})
        })
        .catch(err=>{
            console.log("error with post: ", err);
            
        }); 
    }, 1000)

}