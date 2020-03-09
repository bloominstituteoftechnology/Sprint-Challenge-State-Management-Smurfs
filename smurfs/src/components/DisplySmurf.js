import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchSmurfs } from "../actions/smurfActions";

class DisplaySmurf extends React.Component {
  componentWillMount() {
    this.props.fetchSmurfs();
  }

  render() {
    const smurfInfo = this.props.smurfs.map(smurf => (
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

DisplaySmurf.propTypes = {
  fetchSmurfs: PropTypes.func.isRequired,
  smurfs: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  smurfs: state.smurfs.items
});

export default connect(mapStateToProps, { fetchSmurfs })(DisplaySmurf);
