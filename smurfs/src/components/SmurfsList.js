import React from 'react';
import  { connect } from 'react-redux';
import { useSelector } from "react-redux";

const SmurfsList = props => {
    const smurfs = useSelector(state => state.smurfs)
    console.log( "props in smurfslist", props.smurfs)
    return <>
    <div className="CardBox">
      {smurfs.map(smurf => {
        console.log(smurf);
        return (
          <div key={smurf.id} className="card">
            <p>{`Member name: ${smurf.name}`}</p>
            <p>{`Age: ${smurf.age} years old`}</p>
            <p>{`Height: ${smurf.height} tall`}</p>
          </div>
        );
      })}
    </div>
        
    </>
}

const mapStateToProps = state => {
    return {
        smurfs:state.smurfs, error : state.error
    };
};

export default connect(mapStateToProps, {}) (SmurfsList)