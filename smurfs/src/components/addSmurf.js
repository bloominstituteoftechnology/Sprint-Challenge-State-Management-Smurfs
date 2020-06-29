import React  from "react";
import {useState} from 'react';


const addSmurf = (props) =>{
  
     const [newSmurf, setNewSmurf] = useState({
        name: "",
        age: "",
        height: ""
      });
      const handleChanges = e => {
        setNewSmurf({
          ...newSmurf,
          [e.target.name]: e.target.value
        });
      };
    
      const handleSubmit = e => {
        e.preventDefault();
    
        props.ADDSmurf(newSmurf);
        setNewSmurf({
          name: "",
          age: "",
          height: ""
        });
      };
    
      return (
        <form>
          <input
            type="text"
            name="name"
            value={newSmurf.name}
            onChange={handleChanges}
            placeholder="Name"
          />
          <input
            type="text"
            name="age"
            value={newSmurf.age}
            onChange={handleChanges}
            placeholder="Age"
          />
          <input
            type="text"
            name="height"
            value={newSmurf.height}
            onChange={handleChanges}
            placeholder="Height"
          />
          <button className="button" onClick={handleSubmit}>
            Add smurf
          </button>
        </form>
      );
    } 
export default addSmurf;