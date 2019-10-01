import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import {getSmurfs, newSmurfs} from "../actions";

function SmurfForm(props) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        props.getSmurfs()
    }, [count])

    const [val, setVal] = useState({name: "", age: "", height: ""})

    const handleChange = (e) => {
        e.preventDefault();
        setVal({...val, [e.target.name] : e.target.value, [e.target.age] : e.target.value, [e.target.height] : e.target.value})
        console.log(val)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.newSmurfs(val);
        setCount(count + 1) ;
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name='name' placeholder="Smurf Name" onChange={handleChange}></input>
            <input age='age' placeholder="Smurf Age" onChange={handleChange}></input>
            <input height='height' placeholder="Smurf Height" onChange={handleChange}></input>
            <button type="submit">Add New Smurf</button>
        </form>

    )
}

const mapStateToProps = state => {
    return {
        isPosting: state.isPosting,
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, {getSmurfs, newSmurfs})(SmurfForm)