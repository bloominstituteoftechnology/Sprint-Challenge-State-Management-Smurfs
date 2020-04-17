import React, { useEffect, useContext } from "react";
import { connect } from "react-redux";
import axios from "axios"
import {getSmurfs} from "../actions"
import { AppContext } from "../contexts/AppContext";

const SmurfList = () => {  
    const {smurfs, addSmurf } = useContext(AppContext)
    
    
    console.log(smurfs)
    return (
    <>      
    {smurfs.map(smurf => (
                <div key={smurf.id}>
                    <h3>Name: {smurf.name}</h3>
                    <p>Age: {smurf.age}</p>
                    <p>Height: {smurf.height}</p>
                </div>
                ))}
    </>
    )
        
    
}

  
  export default SmurfList;