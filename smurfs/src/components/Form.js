import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions/index';

const Form = (props) => {
    
    const [newSmurf, setNewSmurf] = useState({
        name: '',
        age: '',
        height: '',
        id:''
    })

    const handleSubmit = (e) => {
        
        e.preventDefault();
        console.log(newSmurf);
        props.addSmurf(newSmurf)
    }

    const handleChanges = (e) => {

        let name = e.target.name;

        setNewSmurf({...newSmurf, [name] : e.target.value })
    }


    return (
        <div>
            <form>
                <input 
                    className = "input"
                    name="name"
                    type="text"
                    placeholder="name"
                    onChange={handleChanges}
                ></input>
                <input 
                    className = "input"
                    name="age"
                    type="number"
                    placeholder="age"
                    onChange={handleChanges}
                ></input>
                <input 
                   className = "input"
                   name="height"
                    type="text"
                    placeholder="height in cm"
                    onChange={handleChanges}
                ></input>
                <button 
                    className = "button"
                    type="submit"
                    onClick={handleSubmit}
                >Join Smurf Village!</button>
            </form>
            
        </div>
    )
}

export default connect( null, {addSmurf})(Form);