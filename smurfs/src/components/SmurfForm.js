import React from 'react'
import { useForm } from 'react-hook-form';



const SmurfForm = () => {

    const {register, handleSubmit} = useForm();
    const onSubmit = (newSmurf) => {
        //event.preventDefault();
        console.log(newSmurf);
        //now how do I add this to the SMURFS state?
    }

    return (
        <div className="SmurfForm">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Smurfy Name" name="name" ref={register} />
                <input type="text" placeholder="Smurfy Age" name="age" ref={register}/>
                <input type="text" placeholder="Smurfy Height" name="height" ref={register} />
                <button type="submit">Add a Smurf to the Villiage</button>
            </form>
        </div>
    )
}

export default SmurfForm;
