import React, { useState } from "react";

const AddSmurf = props => {
  const [smurf, setSmurf] = useState({
    name: "",
    age: "",
    height: "",
    id: Date.now()
  });
};
