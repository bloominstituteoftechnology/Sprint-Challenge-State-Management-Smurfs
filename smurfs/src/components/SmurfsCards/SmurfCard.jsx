import React from 'react'
import styled from 'styled-components';
import smurfImg from './download.jpeg'
function SmurfCard(props) {
    console.log(props)
    return (
        <CardStyles>
        <div className='header'>
            <img src={smurfImg} alt=''></img>
        </div>
        <div className='card-body'>
            <h3> Name: {props.smurf.name}</h3>
            <h4>Age: {props.smurf.age}</h4>
            <h5>Height: {props.smurf.height}</h5>
        </div>
        </CardStyles>
            
    )
}

export default SmurfCard

const CardStyles = styled.div`
height: 300px;
width: 250px;
background: lightcoral;

.header{
height: 55%;
}
img{
    width: 100%;
}
.card-body{
    padding: 10px 0px;
}
`;