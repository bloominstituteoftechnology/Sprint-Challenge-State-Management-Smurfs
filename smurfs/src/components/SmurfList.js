import React from 'react'
import Smurf from './Smurf';
import { connect } from 'react-redux';

const SmurfList = props => {
    return (
        <div>
            {props.smurfs.map(smurf => {
                return (
                    <Smurf id={smurf.id} name={smurf.name} age={smurf.age}/>
                )
            })}
        </div>
    )
}
const mapStateToProps = state => {
    return {
      smurfs: state.smurfs
    };
  };

export default connect(mapStateToProps, { })(SmurfList);