import React from "react";
import styled from "styled-components";

const Style = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  border-radius: 1rem;
  padding: 1rem;
  margin: 1rem auto;
  background: rgb(0, 0, 0, 0.4);
  color: white;
  button {
    background: white;
    border: none;
    border-radius: 0.5rem;
    padding: 0.5rem;
    width: 2rem;
    align-self: flex-end;
  }
`;

export default function SmurfCard(props) {
  return (
    <Style>
      <h2>{props.smurf.name}</h2>
      <p>{props.smurf.age}</p>
      <p>{props.smurf.height}</p>
      <button onClick={e => props.deleteSmurf(props.smurf.id)}>X</button>
    </Style>
  );
}
