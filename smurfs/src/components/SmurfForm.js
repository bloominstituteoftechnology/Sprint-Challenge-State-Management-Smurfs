import React, { useState } from "react";

const SmurfForm = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');

    const nameChangeHandler = e => {
        setName(e.target.value)
    };

    const ageChangeHandler = e => {
        setAge(e.target.value)
    };

    const heightChangeHandler = e => {
        setHeight(e.target.value)
    }

    return (
        <form>
            <input />
            <input />
            <input />
        </form>
    )
}

export default SmurfForm; 