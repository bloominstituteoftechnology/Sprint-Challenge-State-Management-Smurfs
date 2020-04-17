import React, { useState } from "react";
import Axios from "axios";

export const SmurfForm = (props) => {
  const [smurf, setSmurf] = useState({
    name: "",
    age: "",
    height: "",
  });



  const handleChanges = (e) => {
    setSmurf({ ...smurf, [e.target.name]: e.target.value });
    console.log(smurf);
  };





  const submit = (e) => {
    e.preventDefault();

    Axios.post(`http://localhost:3333/smurfs`, smurf)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err.response));

    setSmurf({ name: "", age: "", height: "" });
  };


  


  return (
    <div>
      <form onSubmit={submit}>
        <input
          type="text"
          value={smurf.name}
          name="name"
          onChange={handleChanges}
        />
        <input
          type="text"
          value={smurf.age}
          name="age"
          onChange={handleChanges}
        />
        <input
          type="text"
          value={smurf.height}
          name="height"
          onChange={handleChanges}
        />
        <button type="submit">SUBS</button>
      </form>
    </div>
  );
};
