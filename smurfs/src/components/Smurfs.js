import React from 'react';
import axios from 'axios';

  const Smurfs = ()=>{
    axios
    .get(`http://localhost:3333/smurfs`)
    .then(res =>{
        console.log(res.data);
    })
    .catch(err => {
        console.log(err);
      });
      return (<div></div>)
    }
export default Smurfs;