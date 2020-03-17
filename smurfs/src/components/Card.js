import React from 'react'
import styled from 'styled-components'




const Smurfed = styled.div`
	align-items: center;
	border-bottom: 1px solid rgb(221, 221, 221);
	height: 200px;
	justify-content: space-between;
	padding: 0 3%;
	width: 40%;
	-webkit-box-shadow: 0px 2px 15px -8px rgba(0, 0, 0, 0.42);
	-moz-box-shadow: 0px 2px 15px -8px rgba(0, 0, 0, 0.42);
	box-shadow: 0px 2px 15px -8px rgba(0, 0, 0, 0.42);
	text-align: center;
    margin: auto;
    background-color:lightgrey
`;



const Card = (props) => {
    return (
        <Smurfed>
            <h1>Name:{props.smurf.name}</h1> 
            <h1>Age:{props.smurf.age}</h1>
            <h1>Height:{props.smurf.height}</h1>
        </Smurfed>
    )
}

export default Card