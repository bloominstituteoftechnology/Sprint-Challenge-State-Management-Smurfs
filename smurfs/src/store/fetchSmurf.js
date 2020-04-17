import axios from 'axios';

export const fetchSmurf = () => {
    return dispatch =>{
        dispatch({type: 'FETCH_START'})
        axios
        .get('http://localhost:3333/smurfs')
        .then(res=>{
            console.log(res)
            dispatch({type: 'FETCH_SUCCESS', payload: res.data})
        })
        .catch(err=>{
            dispatch({type: 'FETCH_ERROR', payload: err})
        })
    }
}