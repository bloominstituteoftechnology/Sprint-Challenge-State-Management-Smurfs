import React, { createContext, useState } from "react";

export const Context = createContext();

export const SmurfProvider = props => {
  const [smurf, setSmurf] = useState();

  return (
    <SmurfContext.Provider value={[smurf, setSmurf]}>
      {props.children}
    </SmurfContext.Provider>
  );
};

export default Context;