import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { SmurfContext } from '../../contexts';

const AddSmurf = () => {
    const context = useContext(SmurfContext);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        context.addSmurf(name, age, height);
        handleClear(event);
    }

    const handleClear = (event) => {
        event.preventDefault();
        setName('');
        setAge('');
        setHeight('');
    }

    return (
        <Block>
            <h1>Smurf Village</h1>
            <form onSubmit={event => handleSubmit(event)}>
                <label for="name">Name: <input
                    name="name"
                    id="name"
                    type="text"
                    value={name}
                    onChange={event => setName(event.target.value)}
                /></label>
                <label for="age">Age: <input
                    name="age"
                    id="age"
                    type="text"
                    value={age}
                    onChange={event => setAge(event.target.value)}
                /></label>
                <label for="height">Height: <input
                    name="height"
                    id="height"
                    type="text"
                    value={height}
                    onChange={event => setHeight(event.target.value)}
                /></label>
                <button type="submit">Add</button>
                <button onClick={event => handleClear(event)}>Clear</button>
            </form>
        </Block>
    );
}

export default AddSmurf;

const Block = styled.div`
    background: #3C68AE;
    color: white;
    padding: 1rem;
    margin-bottom: 1rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
        margin: 0;
    }

    form {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    label, button {
        margin: 0 0.5rem;
    }
`;