import React, { useContext } from 'react';
import { SmurfContext } from '../contexts/SmurfContext';
import { useForm } from 'react-hook-form';

export default function Form() {

    const { smurfs, setSmurf } = useContext(SmurfContext);

    const { handleSubmit } = useForm({
        mode: "onBlur"
    })

      const onSubmit = data => {
        console.log("data from Form", data)

      };

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type='text' name='name' placeholder='What`s your smurfin` name?'></input>
            <input type='text' name='age' placeholder='What`s your smurfin` age?'></input>
            <input type='text' name='height' placeholder='How smurfin` tall are ya?'></input>
            <button>Submit</button>
        </form>
    )
}