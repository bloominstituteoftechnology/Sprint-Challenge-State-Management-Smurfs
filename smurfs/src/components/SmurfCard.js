import React, {useContext} from 'react';
import styled from 'styled-components'

// Styels
const Card = styled.div`
border: solid black 2px;
background-color:#3682BA;
width:50%;
margin:20px auto;
`
const H1 = styled.h1`
color:white;
font-size:45px;
`
const P = styled.p`
color:white;
font-size:20px;
`


const SmurfCard = (props) =>{

    return(
        <Card className='smurf-card'>
            <H1>{props.smurf.name}</H1>
            <P>Age: {props.smurf.age}</P>
            <P>Height: {props.smurf.height}</P>
        </Card>
    );
};

export default SmurfCard;