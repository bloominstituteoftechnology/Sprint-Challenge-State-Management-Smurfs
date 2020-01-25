import React, { useState, useContext } from "react";
import { smurfContext } from "../context/smurfContext";

const NewSmurf = () => {
    const [addSmurf, setNewSmurf] = useState({
    name: "", 
    age: "", 
    height: ""});

    return (
    <div>
        <hr />
        <p>Add a New Smurf:</p>
        <p>Smurf Name</p>
        <input type = "text"
            name = "name"
            value = {addSmurf.name}
        />
        <p>Smurf Age</p>
        <input type = "text"
            name = "age"
            value = {addSmurf.age}
        />
        <p>Smurf Height</p>
        <input type = "text"
            name = "height"
            value = {addSmurf.height}
        />
        <br/>
        <button>ADD</button>
    </div>
    );
};

export default NewSmurf;