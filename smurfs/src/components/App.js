import React, { useEffect} from "react";
import "./App.css";
import { connect } from "react-redux";
import axios from "axios";
import Form from './Form';

import { getSmurfs} from '../actions';

const App = (props) => {
  
  
  useEffect(() => {
    const showSmurfs = async () => {
        axios.get('http://localhost:3333/smurfs')
        .then(response =>  {
            console.log(response.data[0].name);
            props.getSmurfs(response.data)
        })
        .catch(error => console.log(error));
    }
    showSmurfs();
}, [])
  
     const bla = props.smurfs;

    return (

      <div className="App">

        {bla.map((e) => 
        <div>
        <h3>name: {e.name}  age: {e.age}  height: {e.height}</h3>
        </div>
        )}

        <Form/>
        



      </div>
  
  );
  }



  export default connect(
    state => { 
    return { smurfs : state.smurfs };
  }, 
      { getSmurfs : getSmurfs } 
  )(App);