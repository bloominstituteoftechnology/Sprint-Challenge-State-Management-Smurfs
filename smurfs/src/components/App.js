import React, {useState, useEffect} from "react";
import {fetchSmurfs} from '../actions'
import {postSmurfs} from '../actions/actionreducer'
import {connect} from 'react-redux'
import "./App.css";
import styled from 'styled-components'


const Smurfed = styled.div`
  align-items: center;
  border-bottom: 1px solid rgb(221, 221, 221);
  height: 70px;
  justify-content: space-between;
  padding: 0 3%;
  width: 400px;
  -webkit-box-shadow: 0px 2px 15px -8px rgba(0, 0, 0, 0.42);
  -moz-box-shadow: 0px 2px 15px -8px rgba(0, 0, 0, 0.42);
  box-shadow: 0px 2px 15px -8px rgba(0, 0, 0, 0.42);
  text-align: center;
  margin: auto;
`




function App(props) {
  const [newSmurf, setNewSmurf] = useState({
    name: '',
    age: 0,
    height: '',
  })


  const handleChanges = e => {
      setNewSmurf(e.target.value);
    };
 
    const handleSubmit = e => {
      e.preventDefault();
      props.postSmurfs(newSmurf)
      setNewSmurf()
    }
  


useEffect(() => {
  props.fetchSmurfs()
}, [fetchSmurfs]) 
   return (
      <Smurfed>
         <h1>WELCOME TO THE SMURFVILLE!!</h1>
         <div className='work'>
            <form onSubmit={handleSubmit}>
              <input type="text"
              name="name" 
              placeholder='Name'
              
              onChange={handleChanges}
               />
              <br />
              <input type="number" 
              name="age"
               placeholder='Age'
               
                onChange={handleChanges}
                 />
              <br />
              <input type="text"
               name="height" 
               placeholder='Height' 
               
                onChange={handleChanges}
                  />
              <br />
              <button type="submit" onClick={handleSubmit} >Add</button>
            </form>
            </div>
            <div>
              {props.smurfError && <p>Error: {props.smurfError} </p>}
              {props.isSmurfLoading ? (<div>Smurf is Loading...</div> ) : (
                props.smurfFilm.map((smurf) => (
                  <Smurfed key={smurf.name}>
                    Name: {smurf.name} <br/ >
                    Age: {smurf.age} <br/ >
                    Height: {smurf.height}
                  </Smurfed>
                ))
              )}
            </div>
      </Smurfed>
    );
  }




function mapStateToProps(state) {
  console.log('map', state)
  return {
  isSmurfLoading: state.post.isLoading,
  smurfFilm: state.post.film,
  smurfError: state.post.error
  }
}


const mapDispatchToProps = {
     fetchSmurfs,
     postSmurfs,
 
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
