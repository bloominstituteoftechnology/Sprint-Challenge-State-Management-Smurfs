import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchSmurfs } from "../actions";
import axios from "axios";

const Smurfs = props => {

  const [smurfs, addSmurf] = useState([]);

  const handleChanges = e => {
    addSmurf({ ...smurfs, [e.target.name]: e.target.value });
  };

const handleSubmit = e => {
    axios
      .post("http://localhost:3333/smurfs", {
        name: smurfs.name,
        age: smurfs.age,
        height: smurfs.height
      })
      .then(res => {
        console.log("response from post: ", res);
        console.log("values: ", smurfs);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <form>
        <label>
          Name:
          <input 
          name="name" 
          value={smurfs.name} 
          onChange={handleChanges} />
        </label>

        <label>
          Age:
          <input 
          name="age" 
          value={smurfs.age} 
          onChange={handleChanges} />
        </label>

        <label>
          Height:
          <input 
          name="height" 
          value={smurfs.height} 
          onChange={handleChanges} />
        </label>

        <input 
        type="submit" 
        placeholder="Add Smurf" 
        onClick={handleSubmit} />
      </form>
      <button className="button" onClick={props.fetchSmurfs}>
        Get Smurfs
      </button>
      
      {props.smurf && !props.isLoading}
      {props.isLoading && <div />}
      {props.smurf.map(smurf => {
        return (
          <div>
            <h2>Name: {smurf.name}</h2>
            <h4>Age: {smurf.age}</h4>
            <h4>Height: {smurf.height}</h4>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    smurf: state.smurf,
    error: state.error
  };
};

export default connect(
  mapStateToProps, 
  { fetchSmurfs }
  )(Smurfs);