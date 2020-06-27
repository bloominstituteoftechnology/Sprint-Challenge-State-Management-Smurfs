import React, { useEffect } from "react";
​
const Smurf = (props) => {
  const onDelete = (e) => {
    props.handleDelete(props.id);
  };
​
  return (
    <>
      <h3>{props.name}</h3>
      <p>Age: {props.age}</p>
      <p>Height: {props.height}</p>
      <button onClick={onDelete}>X</button>
      <hr className="hr"></hr>
    </>
  );
};
​
export default Smurf;
