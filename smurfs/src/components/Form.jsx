import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    height: "",
    id: Math.random()
  });

  const onChangeHandler = evt => {
    setInput({
      ...input,
      [evt.target.name]: evt.target.value
    });
  };

  const onSubmitHandler = evt => {
    // evt.preventDefault();
    console.log("input submit", input);
    axios.post("http://localhost:3333/smurfs", input);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <label>Name: </label>
      <input
        type="text"
        name="name"
        value={input.name}
        onChange={onChangeHandler}
      />
      <label>Age: </label>
      <input
        type="text"
        name="age"
        value={input.age}
        onChange={onChangeHandler}
      />
      <label>height: </label>
      <input
        type="text"
        name="height"
        value={input.height}
        onChange={onChangeHandler}
      />
      <input type="submit" />
    </form>
  );
};

export default Form;
