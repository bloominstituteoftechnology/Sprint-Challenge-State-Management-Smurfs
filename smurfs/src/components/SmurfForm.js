import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../actions';



const SmurfForm = props => {
    const [user, setUser] = useState({
        name: "",
        age: "",
        height: ""
    });

    const handleSubmit = e => {
        props.addPost(user)
        e.preventDefault();
        console.log(` SMURF FORM `,user)
    }

    const handleChanges = e => {
        let name = e.target.name;

        setUser({ ...user, [name]: e.target.value })
    }

    return(
    <div>
        <form >
           <input placeholder='Name' 
                  name='name' 
                  type= 'text'
                  value={props.name} 
                  onChange={handleChanges}/>
           <input placeholder='Age' 
                  name='age' 
                  type= 'text'
                  value={props.age}
                  onChange={handleChanges}/>
           <input placeholder='Height' 
                  name='height' 
                  type= 'text'
                  value={props.height}
                  onChange={handleChanges}/>
            <button type='submit' onClick={handleSubmit}>Submit</button>
        </form>
    </div>

    );
}

export default connect(null, { addPost })(SmurfForm); 