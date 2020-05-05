import React from "react";
import Form from './Form';
import Smurfs from './Smurfs';
import "./App.css";
import { SmurfContext } from '../contexts/SmurfContext';
import { fetchData, addSmurfToAPI } from '../actions/index'
import { initialState } from "../reducer";

export default function App() {

  return (
    <div className="App">
      <h1>Who the Smurf Are You?</h1>
      <SmurfContext.Provider value={{fetchData, addSmurfToAPI}}>
      <Smurfs />
      <Form />
      </SmurfContext.Provider>
    </div>
  );
};

