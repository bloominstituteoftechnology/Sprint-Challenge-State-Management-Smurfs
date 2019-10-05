import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../../actions';


const AddUserForm = props => {
    const [user, setUser] = useState({});

    const handleInputChange = e => {
        setUser({...user, [e.target.name]: e.target.value});
    }

    const submitUser = e => {
        e.preventDefault();
        props.addPost(user);
        setUser({name: '', age: '', height: ''});       
    }

    return(
    <div>

    
        <form onSubmit={submitUser}>
           <input placeholder='Name' 
                  name='name' 
                  value={props.name} 
                  onChange={handleInputChange}/>
           <input placeholder='Age' 
                  name='age' 
                  value={props.age}
                  onChange={handleInputChange}/>
           <input placeholder='Height' 
                  name='height' 
                  value={props.height}
                  onChange={handleInputChange}/>
            <button type='submit'>Submit</button>
        </form>
      <div>
       
      </div>

        </div>
       
    );
}

export default connect(null, {addPost})(AddUserForm);