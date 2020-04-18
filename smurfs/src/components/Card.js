import React from "react";
import styled from "styled-components";

const Container = styled.div`
    height: 200px;
    width: 150px;
    border-radius: 10px;
    border: 5px solid dodgerblue;
`

const Card = ({ name, age, height }) => {
    return (
        <Container>
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>Height: {height}</p>
        </Container>
    )
}

export default Card;