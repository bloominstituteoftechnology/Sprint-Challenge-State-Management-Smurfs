import React, { useState, useContext } from "react";
import { SmurfContext } from '../context/context';
const Form = () => {
  const [addNew, setNew] = useState({ name: "", age: "", height: "" });

  const {Add } = useContext(SmurfContext);
  
  const handleChange = e => {
    setNew({ ...addNew, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    Add(addNew);
  };

  return (
    <div className='SmurfForm'>
      <h2>Add New Smurf</h2>
      <form onSubmit={e => handleSubmit(e)}>
        <input
          type='text'
          name='name'
          placeholder='Name'
          value={addNew.name}
          onChange={e => handleChange(e)}
        />
        <input
          type='number'
          name='age'
          placeholder='Age'
          value={addNew.age}
          onChange={e => handleChange(e)}
        />
        <input
          type='text'
          name='height'
          placeholder='Height'
          value={addNew.height}
          onChange={e => handleChange(e)}
        />
        <button>Add Smurf</button>
      </form>
    </div>
  );
};

export default Form;