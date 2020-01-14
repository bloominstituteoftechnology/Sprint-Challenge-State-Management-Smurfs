import React, { useEffect} from "react";
import "./App.css";
import { connect } from "react-redux";
import axios from "axios";
import Form from './Form';


import { getSmurfs, deleteSmurfs} from '../actions';

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
  
     const smurfs = props.smurfs;

     const deleteSmurf = (id) =>{
      axios.delete(`http://localhost:3333/smurfs/${id}`).then(res=>{
          props.deleteSmurfs(res.data)
      })
  }

    return (

      <div className="App">

        {smurfs.map((each) => 
        <div>
        <h3>name: {each.name}  age: {each.age}  height: {each.height}
         <button onClick={()=>{deleteSmurf(each.id)}} >Delete Smurf</button></h3>
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
      { getSmurfs : getSmurfs, deleteSmurfs : deleteSmurfs } 
  )(App);