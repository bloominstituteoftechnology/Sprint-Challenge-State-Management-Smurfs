import React from 'react';
import axios from 'axios';

 export const Smurfs = ()=>{
    axios
    .get(`http://localhost:3333/smurfs`)
    .then(res =>{
        console.log(res);
    })
    .catch();
};

