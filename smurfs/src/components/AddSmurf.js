// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { add_smurf } from "../actions/index";
// import { new_smurf } from "../actions/index";

// class AddSmurf extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "",
//       age: "",
//       height: ""
//     };
//     this.handleNameInput = this.handleNameInput.bind(this);
//     this.handleAgeInput = this.handleAgeInput.bind(this);
//     this.handleHeightInput = this.handleHeightInput.bind(this);
// }
//     logValues = event => {
//       event.preventDefault();
//       this.props.new_smurf(this.state);
//       this.setState({
//         name: "",
//         age: "",
//         height: ""
//       });
//     };
  
//   handleNameInput(e) {
//     this.setState({ name: e.target.value });
//   }
//   handleAgeInput(e) {
//     this.setState({ age: e.target.value });
//   }
//   handleHeightInput(e) {
//     this.setState({ height: e.target.value });
//   }
//   render() {
//     return (
//       <form onSubmit={this.logValues}>
//         <input
//           type="text"
//           onChange={this.handleNameInput}
//           value={this.state.name}
//           placeholder="Smurf Name"
//         />
//         <input
//           type="number"
//           onChange={this.handleAgeInput}
//           value={this.state.age}
//           placeholder="age"
//         />
//         <input
//           type="number"
//           onChange={this.handleHeightInput}
//           value={this.state.height}
//           placeholder="height inches"
//         />
//         <button onClick={this.logValues}> Add Smurf </button>
//       </form>
//     );
//   }
// }

// export default connect(
//   null,
//   { new_smurf }
// )(AddSmurf);
