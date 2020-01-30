// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getSmurfs, deleteSmurf } from "../actions/action";

// const Village = () => {
//   const store = useSelector(state => state.asyncReducer);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getSmurfs());
//   }, []);

//   return (
//     <div>
//       <h1>This village contains:</h1>
//       {store.smurfs.map(smurf => {
//         return (
//           <div key={smurf.id}>
//             <p>{smurf.name}</p>
//             <p>{smurf.height}</p>
//             <p>{smurf.age}</p>
//             <p>{smurf.id}</p>
//             <button onClick={() => dispatch(deleteSmurf(smurf.id))}>X</button>
//           </div>
//         );
//       })}
//       {/* <button onClick={() => dispatch(getVillage())}>Pull Smurfs</button> */}
//     </div>
//   );
// };

// export default Village;