import React from 'react';

const Smurf = ({name, age, height}) => {
    return (
        <div>
            <p>{`Name: ${name} `}</p>
            <p>{`Age: ${age}`}</p>
            <p>{`Height: ${height} `}</p>
        </div>
    )
}

export default Smurf;