import React, { useState } from "react";

import axios from "axios";

const NewSmurf = () => {
  const [addSmurf, setNewSmurf] = useState({
    name: "",
    age: "",
    height: ""
  });

  const handleChanges = e => {
    setNewSmurf({ ...addSmurf, [e.target.name]: e.target.value });
  };

  const newSmurfPost = () => {
      console.log(addSmurf)
    axios

      .post("http://localhost:3333/smurfs",  addSmurf )
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err));
  };

  console.log(addSmurf);

  const handleSubmit = (e) => {
    e.preventDefault();
    newSmurfPost();
  };

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <hr />
      <p>Add a New Smurf:</p>
      <p>Smurf Name</p>
      <input
        type="text"
        name="name"
        value={addSmurf.name}
        onChange={e => handleChanges(e)}
      />
      <p>Smurf Age</p>
      <input
        type="text"
        name="age"
        value={addSmurf.age}
        onChange={e => handleChanges(e)}
      />
      <p>Smurf Height</p>
      <input
        type="text"
        name="height"
        value={addSmurf.height}
        onChange={e => handleChanges(e)}
      />
      <br />
      <button>ADD NEW SMURF</button>
    </form>
  );
};

export default NewSmurf;
