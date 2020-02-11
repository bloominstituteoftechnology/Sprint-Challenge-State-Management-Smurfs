import React from 'react';
import  { connect } from 'react-redux';
import { useSelector, useDispatch } from "react-redux";
import { deleteSmurf, putSmurf} from  '../actions';



const SmurfsList = () => {

    const smurfs = useSelector(state => state.smurfs);
    const dispatch = useDispatch(); 
    
   const deleteSmurfs = id => {
        dispatch(deleteSmurf(id));
    };
    const putSmurfs = id => {
        dispatch(putSmurf(id));
    };
    return <>
    <div className="CardBox">
      {smurfs.map(smurf => {
        return (
          <div key={smurf.id} className="card">
            <p>{`Member name: ${smurf.name}`}</p>
            <p>{`Age: ${smurf.age} years old`}</p>
            <p>{`Height: ${smurf.height} tall`}</p>
            <button onClick={() => {deleteSmurfs(smurf.id)}} >Delete</button>
            <button onClick={() => {putSmurfs(smurf.id)}} >Edit</button>
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

export default connect(mapStateToProps, {deleteSmurf}) (SmurfsList)