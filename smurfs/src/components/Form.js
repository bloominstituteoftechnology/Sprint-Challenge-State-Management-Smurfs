import React, {useState} from "react"

const Form = () => {
    const [newSmurf, setNewSmurf] = useState({ name: "" })

    const handleSubmit = (e) => {
        e.preventDefault()
        //setNewSmurf({...newSmurf, name: e.name})
        console.log(newSmurf)
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

export default Form