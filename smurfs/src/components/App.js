import React, { Component,useContext,useState,useEffect } from "react";
import axios from 'axios'
import {DataContext} from '../context/DataContext'
import {} from 'react-router-dom'
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

import SmurfList from '../components/SmurfList'
import SmurfForm from '../components/SmurfForm'
import Nav from '../components/Nav'
import "./App.css";
function App(){ 
  const [data,setData] = useState([]);
  const [fetching,setFetching] = useState(false)
  const [newInput ,setNewInput]= useState(0)
  useEffect(()=>{
    axios.get('http://localhost:3333/smurfs')
      .then(res=>{
        setFetching(true)
        setData(res.data)
        console.log(data)
        setTimeout(()=>{
          setFetching(false)
        },2000)
      
      })
  },[newInput])

  const addToDatabase = item=>{
    axios.post('http://localhost:3333/smurfs',item)
    .then(()=>{
      setNewInput(newInput + 1)

      console.log('succsss')
    })
  }
  const override = css`
  display: block;
  margin: 25% auto 0  auto;
  border-color: red;
`;
  return(
    <div>
      <Nav />

      <DataContext.Provider value={{data,setFetching}}>
        {!fetching ?
        <div>
          <SmurfForm />

          <SmurfList />

        </div>
         
        :
        <div className="sweet-loading">
        <p>Loading ....</p>

        <ClipLoader
          css={override}
          size={150}
          color={"#123abc"}
          loading={fetching}
        />
      </div>
      
      }

      </DataContext.Provider>

    </div>
  )

}

export default App;
