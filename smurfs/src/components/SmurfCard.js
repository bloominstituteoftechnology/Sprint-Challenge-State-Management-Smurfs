import {connect} from "react-redux";
import React, {useState} from 'react';
import { fetchSmurfs, updateSmurf, postSmurf, deleteSmurf} from "./smurfAction";


const SmurfCard = props => {
    console.log(props);
    const [name, setName] = useState({
        id: props.id,
        name: '',
        age: '',
        height: '',
    })
    const handleNameChange = e => {
      setName(e.target.value);
    };
 
    const handleFarewell = id => {
      props.deleteSmurf(props.id);
 }

    return (
        <div className="village">
       <div className='smurf-card'>
           
        <h2> {props.name}</h2>
        <h3>HISTORY: {props.age} years </h3>
        <p>STATURE: {props.height}cm</p>
        

        <form onSubmit={props.handleSubmit}>
        <label>Update Name</label>
        <input type='text' name='name' id={props.id} onChange={handleNameChange} value={props.smurfs.name}/>
        <button type='submit'>Submit</button>
        </form>
        <button onClick={handleFarewell}>Farewell!!!</button>
       </div>
       </div>
 )
}

const mapStateToProps = state => {
    return {
      smurfs: [], 
      error: state.error, 
      fetchingSmurfs: state.fetchingSmurfs
    };
  };
  
  export default connect(mapStateToProps, { fetchSmurfs, updateSmurf, postSmurf, deleteSmurf })(SmurfCard);


