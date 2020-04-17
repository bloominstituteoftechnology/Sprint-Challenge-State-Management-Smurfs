import Axios from "axios";

export const getSmurf = () => dispatch => {
  dispatch ({ type: "GETSMURF" });
  Axios
    .get(`http://localhost:3333/smurfs`)
    .then(res => {
      console.log(res.data);
      dispatch({ type: "SUCCESS", payload: res.data });
    })
    .catch(err => console.error(err));
};


