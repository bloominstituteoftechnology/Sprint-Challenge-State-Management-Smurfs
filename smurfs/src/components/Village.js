import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../actions";
import { Card } from "semantic-ui-react";
import Axios from "axios";

// "http://localhost:3333/smurfs";

const Village = () => {
  const [oldSmurf, setOldSmurf] = useState([]);

  Axios.get("http://localhost:3333/smurfs")
    .then(res => {
    console.log(res)
    .catch(err => err)
  });

  return (
    <div className="card">
      return (
      <Card key={oldSmurf.id}>
        <Card.Content>
          <Card.Header>{oldSmurf.name}</Card.Header>
          <Card.Meta>{oldSmurf.age}</Card.Meta>
          <Card.Description>{oldSmurf.height}</Card.Description>
        </Card.Content>
      </Card>
      );
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(mapStateToProps, { getSmurfs })(Village);
