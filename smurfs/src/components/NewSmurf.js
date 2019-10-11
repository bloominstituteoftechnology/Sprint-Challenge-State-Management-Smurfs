// import React from 'react'
// import { connect } from 'react-redux';
// import {add_smurf} from '../actions/index'

// //add new smurf
// //form will manage its own state, dont pass in props
// const NewSmurf = props => {
//  // console.log(`form`, props);
//   const [newSmurf, setNewSmurf] = useState();

//   const handleChanges = e => {
//     props.setNewSmurf(e.target.value); //e.target.name is same as task, line 9
//   };
//   //create a form to submit a new task

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={smf.name}
//         name="name"
//         onChange={handleChanges}
//       />
//       <input
//         type="text"
//         value={smf.age}
//         name="age"
//         onChange={handleChanges}
//       />
//       <input
//         type="text"
//         value={smf.height}
//         name="height"
//         onChange={handleChanges}
//       />
//       <button onClick={() => props.add_smurf(props.newSmurf)} >
//         Add Smurf
//       </button>
//     </form>
//   );
// };
// mapStateToProps

// export default connect(
//     mapStateToProps,
//     { add_smurf }
//   )(NewSmurf);


//   var person = new Object();
//   person.firstName = "John";
//   person.lastName = "Doe";
//   person.age = 50;
//   person.eyeColor = "blue";