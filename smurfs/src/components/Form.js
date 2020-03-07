import React, {useState} from 'react';
import axios from 'axios';

const Form = () =>{
    const [newSmurf, setNewSmurf] = useState({})


const handleChange =(event) => {
    setNewSmurf({...newSmurf, [event.target.name] : event.target.value})
// console.log(newSmurf)
};

// const handleSubmit = (event) =>{
    // event.preventDefault

// };


    return(
        <div className='form-container'>
            <form >
                <label>
                Name:
                <input
                    name='name'
                    type='text'
                    placeholder='Name'
                    onChange={handleChange}
                    value= {newSmurf.name}

                />
                </label>
                <label>
                Age:
                <input
                    name='age'
                    type='text'
                    placeholder='Age'
                    value={newSmurf.age}
                    onChange={handleChange}
                />
                </label>
                <label>
                Height:
                <input
                    name='height'
                    type='text'
                    placeholder='Height'
                    value={newSmurf.height}
                    onChange={handleChange}
                />
                </label>
                <button type='submit'>Create A New Smurf</button>
            </form>
        </div>
    );
};

export default Form;