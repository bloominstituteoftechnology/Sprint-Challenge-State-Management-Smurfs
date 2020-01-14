import { GET_SMURFS, ADD_SMURFS } from './actions';

export const fetchSmurfs = () => dispatch => {
    console.log('fetch')
        fetch('http://localhost:3333/smurfs')
        .then(res => res.json())
        .then(data => dispatch({
            type: GET_SMURFS,
            payload: data
        }));
    
}

export const addSmurfs = (postData) => dispatch => {
   fetch('http://localhost:3333/post', {
       method: 'POST',
       headers: {
           'content-type': 'application/json'
       },
       body: JSON.stringify(postData)
   })
   .then(res => res.json())
   .thenI(post => dispatch({
       type: ADD_SMURFS,
       payload: post
   }))
    
}