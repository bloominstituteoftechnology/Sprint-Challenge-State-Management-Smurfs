import React, { useState, useEffect } from "react";
import { postSmurf, updateSmurf } from "../actions/action";
import { connect } from "react-redux";

const SmurfForm = (props) => {
  const [smurf, setSmurf] = useState({
    name: "",
    age: "",
    height: "",
    id: "",
  });
  
  return (
    <form className="smurfForm" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={smurf.name}
        onChange={changeHandler}
        placeholder="...name"
      />
      <input
        type="text"
        name="height"
        value={smurf.height}
        onChange={changeHandler}
        placeholder="...height"
      />
      <input
        type="text"
        name="age"
        value={smurf.age}
        onChange={changeHandler}
        placeholder="...age"
      />
      <button>{props.isEditing ? `update` : `add`}</button>
    </form>
  );
};

export default connect(mapStateToProps, { postSmurf, updateSmurf })(SmurfForm);
