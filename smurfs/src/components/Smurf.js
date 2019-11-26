import React from 'react';
import { connect } from 'react-redux';


const Smurf = props => {
    console.log( props );
    console.log( props.smurf );
  
  
    return (
      <div className="smurfCard">
        <h2>Name: {props.smurf.name}</h2>
        <p>Age: {props.smurf.age}</p>
        <p>Height: {props.smurf.height}</p>
      </div>
    );
  };
  
  const mapStateToProps = state => {
    return { 
        state 
    };
  };
  
  export default connect(mapStateToProps, { })(Smurf);