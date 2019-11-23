import React from "react";
import axios from "axios";

import styled from "styled-components";

const CardStyles = styled.div`
  height: 200px;
  width: 250px;
  background: grey;
  margin: 10px 5px;
  .header {
    height: 50%;
  }
  img {
    width: 100%;
  }
  .card-body {
    padding: 10px 0px;
  }
  .delete {
    float: right;
    right: 0;
    margin: 0px 20px 0px 0px;
    cursor: pointer;
  }
`;

const SmurfCard = props => {
  function deleteSmurf(id) {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  return (
    <CardStyles>
      <div className="card-body">
        <h3> Name: {props.smurf.name}</h3>
        <h4>Age: {props.smurf.age}</h4>
        <h5>Height: {props.smurf.height}</h5>
        <button
          className="delete"
          onClick={e => {
            deleteSmurf(props.smurf.id);
          }}
        >
          Delete
        </button>
      </div>
    </CardStyles>
  );
};

export default SmurfCard;
