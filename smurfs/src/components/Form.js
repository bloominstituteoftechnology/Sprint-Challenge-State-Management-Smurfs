import React, {useState} from 'react';


const Form = () =>{
    const [newSmurf, setNewSmurf] = useState({})


// const onChange =(event) => {

// };

// const handleChanges = (event) =>{

// };


    return(
        <div className='form-container'>
            <form>
                <input
                    name='name'
                    type='text'

                />
                <input
                    name='age'
                    type='text'

                />
                <input
                    name='height'
                    type='text'
                />
                <button>Create A New Smurf</button>
            </form>
        </div>
    );
};

export default Form;