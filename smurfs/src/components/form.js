import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {addSmurf} from '../actions/action';
import {fetchData} from '../actions/action'

const Form = (props) => {

    useEffect(() => {
        props.fetchData()
    }, []);

    const [newSmurf, setNewSmurf] = useState({
        name: '',
        age: '',
        height: ''
    })
    
    const handleSubmit = () => {
        props.addSmurf(newSmurf)
    }

    const handleChanges = e => {
        let name = e.target.name;
        setNewSmurf({...newSmurf, [name] : e.target.value})
    }

    const handleDelete = e => {
       let del =  e.target.value;
        setNewSmurf({...setNewSmurf, [del] : e.target.value})
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
           <button type="submit" onClick={handleDelete}>Delete</button>
            </form>
        </div>
    )
}
const mapStateToProps = state => {
    console.log(state)
    return {
        name: state.name,
        age: state.age,
        height: state.height,
    }
}

export default connect(mapStateToProps, {addSmurf, fetchData})(Form)