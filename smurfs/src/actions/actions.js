import axios from "axios";
export const FETCHSMURF = "FETCHSMURF";
export const FETCHPASS = "FETCHPASS";
export const FETCHMISS = "FETCHMISS";
export const ADDSMURF = "ADDSMURF";
export const ADDPASS = "ADDPASS";
export const ADDMISS = "ADDMISSS";

export const fetchSmurf = () => dispatch => {
    dispatch({ type: FETCHSMURF, payload: "Building the village" });
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        //   console.log("RES", res.data);
        dispatch({ type: FETCHPASS, payload: res.data });
      })
      .catch(err => {
        dispatch({
          type: FETCHMISS,
          payload: err
        });
      });
  };
  
  export const addSmurf = smurf => dispatch => {
    dispatch({ type: ADDSMURF, payload: "Adding to the village" });
    console.log("addS", smurf);
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then(res => {
        console.log("RES", res.data);
        dispatch({ type: ADDPASS, payload: res.data });
      })
      .catch(err => {
        console.log(err);
        dispatch({
          type: ADDMISS,
          payload: err
        });
      });
  };