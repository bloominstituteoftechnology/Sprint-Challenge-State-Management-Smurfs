import React, {useState} from 'react';
import { connect } from 'react-redux';
import {fetchState} from '../actions';
import axios from 'axios';
import SmurfForm from './SmurfForm';

const Smurfs = props => {


    // const [smurf, setSmurf] = useState([]);

    const addNewSmurf = smu => {
        const newSmurf = {
            id: Date.now(),
            name: smu.name,
            age: smu.age,
            height: smu.height
        }
        handleSubmit(newSmurf)
    }

    const handleSubmit = (values) => {
        console.log("Submitting...", values)
        axios.post("http://localhost:3333/smurfs", values)
        .then(response => {
            console.log(response)
            props.fetchState(values)
        })
        .catch(error => console.log(error.response))
        console.log(values)
    }


    return (
        <div>
            <button onClick={props.fetchState}>Load Smurfs</button>

            <SmurfForm addNewSmurf={addNewSmurf} />

          {
            props.smurfs && !props.isLoading && props.smurfs.map(e => {
            return (
                <div key={e.id}>
                    <h2>{e.name}</h2>
                    <p>Age: {e.age}</p>
                    <p>Height: {e.height}</p>
                </div>
              )
            })
            }
        </div>
        
    )
}

const mapStateToProps = state => {
    return {
        smurfs:state.smurfs
    }
}

export default connect(mapStateToProps, {fetchState})(Smurfs);