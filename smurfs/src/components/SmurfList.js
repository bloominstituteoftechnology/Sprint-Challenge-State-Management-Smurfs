// simple get request

import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function SmurfList(props) {
    const [smurfs, setSmurfs] = useState();
    console.log(props);
    const id = props.match.params.id;
    useEffect(() => {

        axios
        .get(`http://localhost:3333/smurfs/${id}`)
        .then(res => {
            setSmurf(res.data);
            })
        .catch(err => {
            console.log('smurf error', err);
        });
    },[id]);

        return (
            <div className="App">
                <h1>Smurfs</h1>
            </div>
            );
        }

    })

    

    