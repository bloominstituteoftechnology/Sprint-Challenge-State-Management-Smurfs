import React from 'react'
import styled from "styled-components";


const Card = styled.div`
	width: 300px;
	color: white;
	background-color: green;
	height: 100px;
	opacity: 80%;
	text-align: center;
	border-radius: 20px;
	margin: auto;
	font-size: 1.4rem
`;

const Smurf = props => {
    return (
		<Card>
            Name: {props.smurf.name}
            <br/>
            Age: {props.smurf.age}
            <br/>
            Height: {props.smurf.height}
		</Card>
    )
}

export default Smurf