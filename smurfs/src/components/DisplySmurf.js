import React from "react";

class DisplaySmurf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }

  componentWillMount() {
    fetch("http://localhost:3333/smurfs")
      .then(res => res.json())
      .then(data => this.setState({ smurfs: data }));
  }

  render() {
    const smurfInfo = this.state.smurfs.map(smurf => (
      <div key={smurf.id}>
        <h2>{smurf.name}</h2>
        <h3>Age: {smurf.age} yrs. old</h3>
        <h4>Height: {smurf.height}</h4>
      </div>
    ));
    return (
      <div>
        <h1>Smurfs</h1>
        {smurfInfo}
      </div>
    );
  }
}

export default DisplaySmurf;
