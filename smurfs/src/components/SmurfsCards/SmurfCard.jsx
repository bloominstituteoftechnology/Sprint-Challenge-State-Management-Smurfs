import React from 'react'
import styled from 'styled-components';
import axios from 'axios'
import smurfImg from './download.jpeg'
function SmurfCard(props) {
    console.log(props.smurf)
    function deleteSmurf(id){
        axios.delete(`http://localhost:3333/smurfs/${id}`)
        .then(res=> console.log(res))
        .catch(err=> console.log(err))
    }
    return (
        <CardStyles>
        <div className='header'>
            <img src={smurfImg} alt=''></img>
        </div>
        <div className='card-body'>
            <h3> Name: {props.smurf.name}</h3>
            <h4>Age: {props.smurf.age}</h4>
            <h5>Height: {props.smurf.height}</h5>
            <p className='delete' 
                onClick={e=>{
                    deleteSmurf(props.smurf.id)
                }}
            >Delete</p>
        </div>
        </CardStyles>
            
    )
}

export default SmurfCard

const CardStyles = styled.div`
height: 400px;
width: 250px;
background: lightcoral;
margin: 10px 5px; 

.header{
height: 50%;
}
img{
    width: 100%;
}
.card-body{
    padding: 10px 0px;
}
.delete{
    float: right;
    right: 0;
    margin: 0px 20px 0px 0px;
    cursor: pointer;

}
`;