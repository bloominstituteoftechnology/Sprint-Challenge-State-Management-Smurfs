import React, { useState, useEffect } from "react";
import axios from 'axios';
import styled from 'styled-components';

import { SmurfContext } from '../contexts';

import Smurf from './Smurf';
import AddSmurf from './AddSmurf';

function App () {

    const [smurfs, setSmurfs] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3333/smurfs')
            .then(response => {
                console.log('Axios Get -> ', response);
                setSmurfs(response.data)
            })
            .catch(err => console.log(err));
    }, []);

    const addSmurf = (name, age, height) => {
        const newSmurf = {
            id: smurfs.length,
            name: name,
            age: age,
            height: height
        };
        axios.post('http://localhost:3333/smurfs', newSmurf)
            .then(response => {
                console.log('Axios Post -> ', response);
                setSmurfs([...smurfs, newSmurf])
            })
            .catch(err => console.log(err));
    };

    return (
        <SmurfContext.Provider value={{
            smurfs: smurfs,
            addSmurf: addSmurf
        }}>
            <AddSmurf />
            <SmurfVillage>
                {(smurfs.length > 0) ? (smurfs.map(s => <Smurf id={s.id} />)) : (<div>No Smurfs Yet...</div>)}
            </SmurfVillage>
        </SmurfContext.Provider>
    );
}

export default App;

const SmurfVillage = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
`;