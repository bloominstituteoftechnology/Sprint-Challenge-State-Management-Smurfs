import React, { useContext } from 'react';
import { SmurfContext } from '../context/smurfcontext';


const SmurfList = () => {
    const smurfs = useContext(SmurfContext);

    return (
        <div className="smurf-list">
            {smurfs.map(char => (
                <div className="smurf-card">
                    <h2 key={char.id}>
                        Why, Hello there!I'm {char.name}. Some fun facts about me are that I am {char.age} years old and yet I am only {char.height} tall! What about you?!
                    </h2>
                </div>
            ))}
        </div>
    );
};

export default SmurfList;