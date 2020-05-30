import React, { useContext } from 'react';
import { SmurfContext } from '../context/smurfcontext';
import styled from 'styled-components';

// const Card = styled.div`
//     color: black;
//     width: 400px;
//     max-height: auto;
//     margin-left: auto;
//     margin-right: auto;
//     // display: flex;
//     // flex-direction: row;
// `;


const SmurfList = () =>{    
    
    const smurfs = useContext(SmurfContext);

    return (
        <div className="smurf-list">
            <>
 
                {smurfs.map(char => (
                <h3 key ={char.key}>Hey There! My name is {char.name}, I am {char.age} years old and I am only {char.height} tal!</h3>
            ))}            

           </>

        </div>
    );
};

export default SmurfList;