import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import "./App.css";
import { getSmurfs } from "../actions/getSmurfs";
import { submitSmurf } from "../actions/submitSmurf";

function App(props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");

  useEffect(() => {
    props.getSmurfs();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitSmurf({
      name: name,
      age: age,
      height: height,
    });
    setName("");
    setAge("");
    setHeight("");
  };

  const deleteSmurf = (id) => {
    console.log(id);
    const request = axios.delete("http://localhost:3333/smurfs/" + id);

    return request.then((response) => response.data);
  };

  const handleNameChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleAgeChange = (e) => {
    e.preventDefault();
    setAge(e.target.value);
  };

  const handleHeightChange = (e) => {
    e.preventDefault();
    setHeight(e.target.value);
  };
  return (
    <div className="App">
      <h1 className="app-title">Smurf Village</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="NAME"
          name="Name"
          value={name}
          onChange={handleNameChange}
        />
        <input
          placeholder="AGE"
          name="Age"
          value={age}
          onChange={handleAgeChange}
        />
        <input
          placeholder="HEIGHT"
          name="Height"
          value={height}
          onChange={handleHeightChange}
        />
        <div className="button" id="button-2" onClick={handleSubmit}>
          <div id="slide"></div>
          <a href="#">Submit</a>
        </div>
      </form>

      <div className="smurf-cards">
        {props.smurfs.map((smurf) => {
          return (
            <div className="smurf-card" key={smurf.id}>
              <h2>{smurf.name}</h2>
              <h4>Age: {smurf.age}</h4>
              <h4>Height: {smurf.height}cm</h4>
              <i
                className="fa fa-trash fa-2x"
                onClick={() => deleteSmurf(smurf.id)}
              ></i>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    smurfs: state.smurfs,
  };
}

const mapDispatchToProps = {
  getSmurfs,
  submitSmurf,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
