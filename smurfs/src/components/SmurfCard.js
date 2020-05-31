import React, { useContext, useState } from "react";
import { GlobalContext } from "../contexts/GlobalState";
import Axios from "axios";

const SmurfCard = (props) => {
  const [edited, setEdited] = useState({
    name: "",
  });
  const { fetchSuccess, fetchError, editing, state } = useContext(
    GlobalContext
  );

  const handleDelete = () => {
    Axios.delete(`http://localhost:3333/smurfs/${props.smurf.id}`)
      .then((response) => {
        fetchSuccess(response.data);
      })
      .catch((error) => {
        fetchError(error);
      });
  };

  const handleChange = (e) => {
    setEdited({
      ...edited,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (e) => {
    Axios.put(`http://localhost:3333/smurfs/${props.smurf.id}`, edited)
      .then((response) => {
        fetchSuccess(response.data);
      })
      .catch((error) => {
        fetchError(error);
      });
  };

  return (
    <div>
      {state.editing ? (
        <div>
          <input
            type="text"
            name="name"
            value={edited.name}
            onChange={handleChange}
          />
          <button onClick={handleClick}>Set edit</button>
        </div>
      ) : (
        <div className="smurfCard">
          <h1>{props.smurf.name}</h1>
          <p>Age: {props.smurf.age} years</p>
          <p>Height: {props.smurf.height}</p>
          <button onClick={() => editing()}>Edit Smurf</button>
          <button onClick={handleDelete}>Delete Smurf</button>
        </div>
      )}
    </div>
  );
};

export default SmurfCard;
