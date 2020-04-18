import axios from "axios";
export const DELETE_SMURF = "DELETE_SMURF";

export function deleteSmurf() {
  return (dispatch) => {
    axios
      .delete(`http://localhost:3333/smurfs/${this.state.id}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };
}
