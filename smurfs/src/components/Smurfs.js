import axios from 'axios';
import React,{ useState, useEffect } from 'react';
import { SmurfContext } from '../contexts/SmurfContext';
import SmurfCard from './SmurfCard';


  const Smurfs = ()=>{
    const [smurf, addSmurf]=useState([]);
    useEffect(()=>{
      const smurf_smurf = () => {
axios
    .get(`http://localhost:3333/smurfs`)
    .then(res =>{
        addSmurf(res.data);
        //console.log(res.data);
    })
    .catch(err => {
        console.log(err);
      });
    }
    smurf_smurf();
  },[]);
      if (!smurf) {
        return <div>Loading smurf information...</div>;
      
      }
      
      else{
        console.log(smurf);
        return <div>
      <h2> {smurf.map(smurfy => (
        <SmurfCard key={smurfy.id} smurfy={smurfy} />
      ))}</h2>
          </div>
      }
    
    }
export default Smurfs;