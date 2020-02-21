import React, { useState, useEffect } from "react";
import "./App.css";
import { SmurfContext } from './SmurfContext'
import axios from 'axios'
import SmurfList from './SmurfList'
import SmurfForm from './SmurfForm'
import styled from 'styled-components'

const Village = styled.div`
  width: 400px;
  margin: auto;
`
const App = () => {
const [smurfs, setSmurfs] = useState([])
const addSmurf = newSmurf => {
  setSmurfs([...smurfs, newSmurf]);
}

// const Remove = smurf => {
//   axios.delete(`http://localhost:3333/smurfs/${smurf}`).then(res => {
//     setSmurfs(res.data);
//   });
// };

useEffect(() => {
  axios
    .get('http://localhost:3333/smurfs')
    .then(res =>{
      console.log(res.data)
      setSmurfs(res.data)
    })
}, [])


    return (
      <SmurfContext.Provider value={{addSmurf, smurfs}}>
      <Village>
      
      <SmurfList/>
      <SmurfForm/>

      </Village>
      </SmurfContext.Provider>
    );
  
}

export default App;
