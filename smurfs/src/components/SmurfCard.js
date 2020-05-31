import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalState";
import Axios from "axios";
const SmurfCard = (props) => {
  const { fetchSuccess, fetchError } = useContext(GlobalContext);

  const handleDelete = () => {
    Axios.delete(`http://localhost:3333/smurfs/${props.smurf.id}`)
      .then((response) => {
        fetchSuccess(response.data);
      })
      .catch((error) => {
        fetchError(error);
      });
  };

  return (
    <div>
      {!props.smurf ? (
        "LOADING..."
      ) : (
        <div className="smurfCard">
          <h1>{props.smurf.name}</h1>
          <p>Age: {props.smurf.age} years</p>
          <p>Height: {props.smurf.height}</p>
          <button>Edit Smurf</button>
          <button onClick={handleDelete}>Delete Smurf</button>
        </div>
      )}
    </div>
  );
};

export default SmurfCard;
