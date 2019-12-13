import React, {useState} from 'react'


const SmurfForm = (props) => {
    const [newSmurf, setNewSmurf] = useState({
        name: "",
        age: 0,
        height: "5cm",
        
    })
console.log("newsmurf form",newSmurf)
    const handleChanges = e => {
        setNewSmurf({...newSmurf, [e.target.name]: e.target.value})
    }

    return(
    <form onSubmit={(e) => {
        e.preventDefault();
        props.postSmurfs(newSmurf);
    }}
    
    >
        <input type="text" name="name" onChange={handleChanges} placeholder="name" />
        <input type="number" name="age" onChange={handleChanges} placeholder="age"/>
        <input type="number" name="height" onChange={handleChanges} placeholder="height"/>
        <button type='submit'
        >ADD</button>
    </form>
    )
}

export default SmurfForm;