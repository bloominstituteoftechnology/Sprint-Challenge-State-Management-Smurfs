import React, {useState} from 'react';


const Form = () =>{
    const [newSmurf, setNewSmurf] = useState({})


const handleChange =(event) => {
    setNewSmurf({...newSmurf, [event.target.name] : event.target.value})
};

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
                />
                </label>
                <label>
                Height:
                <input
                    name='height'
                    type='text'
                    placeholder='Height'
                    value={newSmurf.height}
                />
                </label>
                <button>Create A New Smurf</button>
            </form>
        </div>
    );
};

export default Form;