import React, { useState, useEffect } from "react";
import Axios from "axios";

import styled from "styled-components";

const StylesForm = styled.div`
  form {
    display: flex;
    flex-direction: column;
    width: 400px;
  }
`;

export const SmurfForm = () => {
  const [smurf, setSmurf] = useState({
    name: "",
    age: "",
    height: "",
    id: Date.now()
  });

  const handleChange = e => {
    setSmurf({
      ...smurf,
      [e.target.name]: [e.target.value]
    });
  };

  const handleSubmit = () => {
    Axios.post("http://localhost:3333/smurfs", smurf)
      .then(res => console.log(res))
      .catch(err => console.log(err));
    setSmurf({ name: "", age: "", height: "", id: Date.now() });
  };

  return (
    <StylesForm>
      <form onSubmit={handleChange}>
      <input placeholder='Smurf Name' type='text' name='name' value={smurf.name} onChange={handleChange}/>
      <input placeholder="Smurf age" type='text' name='age' value={smurf.age} onChange={handleChange} />
      <input placeholder='Smurf Height' type='text' name='height' value={smurf.height} onChange={handleChange}/>
      <input placeholder="Smurf ID" type='text' name='id' value={smurf.id} onChange={handleChange} />
          <button>Add Smurf</button>
      </form>
    </StylesForm>
  );
};

export default SmurfForm;
