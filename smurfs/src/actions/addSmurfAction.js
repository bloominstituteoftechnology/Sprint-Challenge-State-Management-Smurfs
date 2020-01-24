// import axios from "axios";

// export const addSmurf = (newSmurfName, newSmurfHeight, newSmurfAge) => {
//   return {
//     type: "ADD_SMURF",
//     payload: { name: newSmurfName, age: newSmurfAge, height: newSmurfHeight }
//   };
// };

// export const addSmurf = (
//   newSmurfName,
//   newSmurfHeight,
//   newSmurfAge
// ) => dispatch => {
//   dispatch({ type: "ADDING_SMURF" });
//   axios
//     .post("http://localhost:3333/smurfs", {
//       newSmurfName,
//       newSmurfHeight,
//       newSmurfAge
//     })
//     .then(res => {
//       dispatch({ type: "ADD_SMURF" });
//     })
//     .catch(err => console.log(err));
// };
