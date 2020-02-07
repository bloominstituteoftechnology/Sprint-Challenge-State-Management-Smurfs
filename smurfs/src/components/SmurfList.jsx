import React, { useContext } from "react";
import { SmurfContext } from "../contexts/SmurfContext";

const SmurfList = () => {
  const { smurfs } = useContext(SmurfContext);
  console.log("smurfs", smurfs);
  if (!smurfs) {
    return <>isLoading</>;
  } else {
    return (
      <div className="list">
        {/* {console.log(smurfs.length)} */}
        {smurfs.map(e => (
          <div className="smurf" id={e.id}>
            <p>Name: {e.name}</p>
            <p>Age: {e.age}</p>
            <p>Height: {e.height}</p>
          </div>
        ))}
      </div>
    );
  }
};

export default SmurfList;
