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
        setVal({...val, [e.target.name] : e.target.value})
        console.log(val)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.newSmurfs(val);
        setCount(count + 1) 
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name='name' onChange={handleChange}></input>
            <input age='age' onChange={handleChange}></input>
            <input height='height' onChange={handleChange}></input>
            <button type="submit">Add New Smurf</button>
        </form>

    )
}

const mapStateToProps = state => {
    return {
        isPosting: state.isPosting
    }
}

export default connect(mapStateToProps, {getSmurfs, newSmurfs})(SmurfForm)