import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addSmurf} from '../actions/action';

const Form = (props) => {
    const [newSmurf, setNewSmurf] = useState({
        name: '',
        age: '',
        height: ''
    })
    
    const handleSubmit = e => {
        props.addSmurf(newSmurf)
    }

    const handleChanges = e => {
        let name = e.target.name;

        setNewSmurf({...newSmurf, [name] : e.target.value})
    }
    return (
        <div>
            <form>
               
                <input name="name" type="text" placeholder="Name" onChange={handleChanges}/>
                
                <br></br>
                
                <input name="age" type="text" placeholder="Age" onChange={handleChanges}/>
                <br></br>
                <input name="height" type="text" placeholder="Height" onChange={handleChanges}/>
                <br></br>
           <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default connect(null, {addSmurf})(Form)