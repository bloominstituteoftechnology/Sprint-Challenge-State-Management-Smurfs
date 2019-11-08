import React, {useState} from 'react';
import updateSmurf from "./smurfAction";


const SmurfCard = props => {
    console.log(props)
    const [smurfs, setSmurfs] = useState({
        id: props.id,
        name: '',
    })


    const handleChange = e => setSmurfs({...smurfs, [e.target.name]: e.target.value});

    const handleSubmit = async e => {
        e.preventDefault();
        await props.updateSmurf(smurfs);
        props.history.push('/');
    }


    return (
       <div>
           
           <h1>NOMENCLATURE: {props.name}</h1>
           <h3>HISTORY: {props.age} yeahrs </h3>
        <p>STATURE: {props.height}cm</p>
        <h4>ID: {props.id}</h4>
        <form onSubmit={handleSubmit}>
        <label>Update Name</label>
        <input type='text' name='name' onChange={props.handleChange} value={props.id.name} />
        <button type='submit'>Submit</button>
        </form>
       </div>
 )
}

export default SmurfCard;
