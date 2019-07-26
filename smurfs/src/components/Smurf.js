import React from 'react';

const Smurf = (props) => {
    // console.log(props.sm.age)
    const {
        age,
        height,
        description,
        id,
        name
    } = props.sm

    return (
        <div>
            <h1> Hello from Smurf Item</h1>
        </div>
    );
};

export default Smurf;