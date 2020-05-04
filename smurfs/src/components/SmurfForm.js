import React from 'react'
import { useForm } from 'react-hook-form';



const SmurfForm = () => {

    const {register, handleSubmit} = useForm();
    const onSubmit = (data) => {
        //event.preventDefault();
        console.log(data);
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
