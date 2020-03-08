import React from "react";

class DisplaySmurf extends React.Component {
  //   constructor() {
  //     super();
  //     this.state = {
  //       name: "",
  //       age: "",
  //       height: ""
  //     };
  //   }

  componentWillMount() {
    console.log(123);
  }

  render() {
    return (
      <div>
        <h1>Smurfs</h1>
      </div>
    );
  }
}

export default DisplaySmurf;
