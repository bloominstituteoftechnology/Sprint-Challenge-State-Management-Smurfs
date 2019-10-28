import React, { useState, useEffect} from "react";
import { SmurfContext } from '../context';
import axios from 'axios';
import Form from './Form';
import Smurfs from './Smurfs';
import "./App.css";

 function App() { 
    const [smurfs, setSmurfs] = useState([]);
    const [newSmurf, setNewSmurf] = useState({})
    useEffect( () => {
      axios.get(`http://localhost:3333/smurfs`)
           .then(res => {
              setSmurfs(res.data);
              console.log(res)
           })
           .catch( err => {
              console.log(err)
           })
    },[]);

    useEffect( () => {
       postSmurf(newSmurf);
    }, [newSmurf])
    
    const addSmurf = (incomingSmurf) => {
        if(!incomingSmurf) return;
        setNewSmurf(incomingSmurf);
    }
    const postSmurf = (newSmurf) => {
       axios.post(`http://localhost:3333/smurfs`, newSmurf)
            .then( res => {
               setSmurfs(res.data)
               console.log(res.data)
            })
            .catch( err => {
               console.log(err)
            })
    }
    const deleteSmurf = (smurf) => {
       const id = smurf.id;
       axios.delete(`http://localhost:3333/smurfs/${id}`)
            .then( response => {
               setSmurfs(response.data);
            })
            .catch(err => {
               console.log(err);
            })
    }
    const updateSmurf = (smurf) => {
      const id = smurf.id;
      console.log(smurf)
      axios.put(`http://localhost:3333/smurfs/${id}`, smurf)
           .then( response => {
              setSmurfs(response.data);
           })
           .catch(err => {
              console.log(err);
           })
    }
    const smufee = {
      smurfs,
      setSmurfs,
      addSmurf, 
      deleteSmurf,
      updateSmurf
   }
    return (
      <SmurfContext.Provider value={smufee}>
        <div className="App">
          <h1>SMURFS! 2.0 W/ Redux</h1>
          <Form />
          <Smurfs/>       
        </div>
      </SmurfContext.Provider>
    );
  }


export default App;
