import React from 'react'
import styled from 'styled-components'

const Div = styled.div `
width:70%;
margin:0 auto;
text-align:center;

`

export default function Smurf(props) {
    return (
        <Div>
            <h3>{props.smurf.name} </h3>
            <ul>
                <li>
                    <p>{props.smurf.age} </p>
                </li>

                <li>
                    <p>{props.smurf.height} </p>
                </li>
            </ul>
        </Div>
    )
}
