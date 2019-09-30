import React, { createContext, useState } from "react";

export const Context = createContext();

export const SmurfProvider = props => {
  const [smurf, setSmurf] = useState();

  return (
    <Context.Provider value={[smurf, setSmurf]}>
      {props.children}
    </Context.Provider>
  );
};

export default Context;