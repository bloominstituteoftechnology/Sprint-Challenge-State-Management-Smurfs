import React, { useContext } from 'react';
import { SmurfsContext } from '../contexts/SmurfsContext';

const SmurfsForm = () => {
    const {form, handleChange, onSubmit} = useContext(SmurfsContext);
    return (
        <form onSubmit={onSubmit}>
            <label htmlFor='name'>
                <input
                    id='name'
                    type='text'
                    placeholder='name'
                    name='name'
                    onChange={handleChange}
                    value={form.name}
                    />
            </label>
            <label htmlFor='age'>
                <input  
                    id='age'
                    type='text'
                    placeholder='age'
                    name='age'
                    onChange={handleChange}
                    value={form.age}
                    />
            </label>
            <label htmlFor='height'>
                <input 
                    id='height'
                    type='text'
                    placeholder='height'
                    name='height'
                    onChange={handleChange}
                    value={form.height}
                    />
            </label>
            <button type='submit' disabled={!form}>Add your own smurf!</button>
        </form>
    )
}

export default SmurfsForm;