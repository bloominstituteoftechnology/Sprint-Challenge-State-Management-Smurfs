import React, { useState } from 'react';
import {connect} from 'react-redux';
import { addSmurfs } from '../actions';

function Smurfs_Form(props) {

    const [smurf, setSmurf] = useState({
        name: '',
        age: '',
        height: ''
    })
    const onChange = e => setSmurf({
        ...smurf,
        [e.target.name]: e.target.value

    })

    const onSubmit  = e => {
        e.preventDefault();
        props.addSmurfs(smurf);
        setSmurf({
            name: '',
            age: '',
            height: '',
            id: ''
        });

    }

    return (
        <div>
            <form onSubmit = {onSubmit}>
                <h2>Add Smurf</h2>
                <input type='text' placeholder = 'name' name = 'name' value= {smurf.name} onChange = {onChange} />
                <input type='number' placeholder = 'age' name = 'age' value= {smurf.age} onChange = {onChange} />
                <input type='text' placeholder = 'height' name = 'height' value= {smurf.height} onChange = {onChange} />
                 <div>
                     <button className = 'btnDiv' type = 'submit'>Submit</button>
                 </div>
            </form>

        </div>
    )
}

const mapStateToProps = () => {
    return {

    }
}

export default connect(mapStateToProps, {addSmurfs})(Smurfs_Form)