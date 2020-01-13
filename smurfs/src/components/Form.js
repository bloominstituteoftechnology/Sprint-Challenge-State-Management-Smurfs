import React, { useContext, useState } from "react";
import { SmurfContext } from "../contexts/SmurfContext";

function Form() {
  const { addSmurf } = useContext(SmurfContext);

  const [newSmurf, setNewSmurf] = useState({
    name: "",
    age: "",
    height: "",
    id: NaN
  });

  const handleSubmit = event => {
    event.preventDefault();
    addSmurf(newSmurf);
  };

  const handleChanges = event => {
    const smurf = event.target.name;
    setNewSmurf({
      ...newSmurf,
      [smurf]: event.target.value,
      id: Math.random()
    });
  };

  return (
    <div>
      <form>
        <input
          name="name"
          type="text"
          placeholder="name"
          onChange={handleChanges}
        ></input>
        <input
          name="age"
          type="text"
          placeholder="age"
          onChange={handleChanges}
        ></input>
        <input
          name="height"
          type="text"
          placeholder="height"
          onChange={handleChanges}
        ></input>
        <button type="submit" onClick={handleSubmit}>
          Smurfify!
        </button>
      </form>
    </div>
  );
}
export default Form;
