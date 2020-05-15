import React, { Component,useContext,useState,useEffect } from "react";
import axios from 'axios'
import {DataContext} from '../context/DataContext'
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
import styled from 'styled-components'
//components
import SmurfList from '../components/SmurfList'
import SmurfForm from '../components/SmurfForm'
import Nav from '../components/Nav'
import "./App.css";

const InnerDiv = styled.div `
    background-color: rgba(0, 0, 0, 0.3);

  padding:2%;
  margin:1% auto;
  width:80%;
  overflow:hidden;
  


`

function App(){ 
  //database state
  const [data,setData] = useState([]);
  const [fetching,setFetching] = useState(false)
  
//useEffect for adding axios request data to the data state
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
  },[])

  //add to database is used to add new smurfs to the database and to the local state

  const addToDatabase = item=>{

    axios.post('http://localhost:3333/smurfs',item)
    .then(()=>{
      setData([...data,item])
      console.log('succsss')
    })
    .catch(err=>console.log(err))

    setData([...data,item])

  }

// overide is the css for the loading circle 
  const override = css`
  display: block;
  margin:15% auto 0  auto;
  border-color: red;
`;
  
return(
    <div className='App'>
      <Nav />
{/* wrapping the smurfForm and List in DataContext.Provider to extend global state */}
      <DataContext.Provider value={{data,setFetching,addToDatabase}}>
        {!fetching ?
        <InnerDiv>
          <SmurfForm className='smurForm'  />

          <SmurfList />

        </InnerDiv>
         
        :
        // Loading circle
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
