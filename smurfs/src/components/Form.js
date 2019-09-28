import React, {useState} from "react"
import {connect} from "react-redux"
import {addSmurf} from "../actions/actions"

const Form = (props) => {
    const [newSmurf, setNewSmurf] = useState({ name: "" })

    const handleSubmit = (e) => {
        e.preventDefault()
        //setNewSmurf({...newSmurf, name: e.name})
        console.log(newSmurf)
        props.addSmurf(newSmurf)
    }

    const handleChanges = (e) => {
        e.preventDefault()
        setNewSmurf({ name : e.target.value})
        
    }

    return (
        <div>
            <form>
                <input name="name" type="text" placeholder="name" onChange={handleChanges}></input>
                <button type="submit" onClick={handleSubmit}>Submit your smurt</button>
            </form>
        </div>
    )
}

export default connect(null, {addSmurf})(Form)