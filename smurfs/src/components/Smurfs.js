import React from 'react';
import axios from 'axios';

  const Smurfs = ()=>{
    axios
    .get(`http://localhost:3333/smurfs`)
    .then(res =>{
        return (<div></div>)
    })
    .catch(err => {
        console.log(err);
      });
    }
export default Smurfs;