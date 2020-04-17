import React, { Component } from "react";
import "./App.css";

import SmurfList from "./SmurfList";
import Form from "./Form";


export default function App() {
  return (
    <div className="App">
      <h1>Smurfs!</h1>
      <Form />
      <SmurfList />
    </div>
  );
}
