import React, {useState} from 'react';
import {connect} from 'react-redux';
import {giveData} from '../actions/index';

const SmurfAddForm = props =>{

    const [smurf, setSmurf] = useState({
        name: '',
        age: 0,
        height: 0        
    });

    const handleSubmit = e =>{
        e.preventDefault(); 
        props.giveData(smurf);
        setSmurf({
            name: '',
            age: 0,
            height: 0,
            id: Date.now()           
        })

    }

    const handleChange = e =>{
        setSmurf({...smurf,[e.target.name]:e.target.value});
        console.log(smurf);
    }
    return(
        <div>
            <form onSubmit = {handleSubmit}>
                <input
                    type = "text"
                    placeholder = "Enter a Name"
                    value = {smurf.name}
                    name = 'name'
                    onChange = {handleChange}
                />
                <input
                    type = "number"
                    placeholder = "Enter Age"
                    value = {smurf.age}
                    name = 'age'
                    onChange = {handleChange}
                />
                <input
                    type = "number"
                    placeholder = "Enter Height"
                    value = {smurf.height}
                    name = 'height'
                    onChange = {handleChange}
                />
                <button type = "submit">Submit</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        isFetchingData: state.isFetchingData
    }
}

export default connect(
    mapStateToProps,
    {giveData}
)(SmurfAddForm);