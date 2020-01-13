import React from 'react';
import './App.css';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

const Smurf = (props) => {
    return (
        <Card className="smurf">
            <br></br>
            <Typography variant='h4'>{props.smurf.name}</Typography>
            <Typography variant='h6'>Age: {props.smurf.age}</Typography>
            <Typography variant='h6'>Height: {props.smurf.height}</Typography>
            <br></br>
        </Card>
    )
}

export default Smurf;