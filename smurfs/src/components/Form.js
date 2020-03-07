import React, {useState} from 'react';


const Form = () =>{
    const [newSmurf, setNewSmurf] = useState({})


// const handleChange =(event) => {

// };

// const handleSubmit = (event) =>{

// };


    return(
        <div className='form-container'>
            <form>
                <label>
                Name:
                <input
                    name='name'
                    type='text'
                    placeholder='Name'
                />
                </label>
                <label>
                Age:
                <input
                    name='age'
                    type='text'
                    placeholder='Age'
                />
                </label>
                <label>
                Height:
                <input
                    name='height'
                    type='text'
                    placeholder='Height'
                />
                </label>
                <button>Create A New Smurf</button>
            </form>
        </div>
    );
};

export default Form;