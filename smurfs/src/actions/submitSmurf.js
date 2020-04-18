import axios from "axios";
export const SUBMIT_SMURF = "SUBMIT_SMURF";

export function submitSmurf(formData) {
  return (dispatch) => {
    dispatch({ type: SUBMIT_SMURF, payload: formData });
    axios.post("http://localhost:3333/smurfs", formData).then((res) => {
      console.log(res);
    });
  };
}
