import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreator";
import "./App.css";

export function Smurf(props) {
  const { getSmurf, smurfData } = props;
  useEffect(() => {
    getSmurf();
  }, []);

  return (
    <div>
      {smurfData ? smurfData.map(smurf => {
        return (
          <div className="smurfs" key={smurf.id}>
            <p>{smurf.name}</p>
            <p>{smurf.age}</p>
            <p>{smurf.height}</p>
          </div>
        );
      })
      : null}
    </div>
  );
}

export default connect(
  state => state,
  actionCreators
)(Smurf);
