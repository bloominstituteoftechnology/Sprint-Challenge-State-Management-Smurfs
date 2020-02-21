import React, { Component, useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
import { smurfContext } from "../context/smurfContext";
import SmurfList from "./Smurflist";

function App() {
  const [smurfList, setsmurfList] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then(resp => {
        setsmurfList(resp.data);
      })
      .catch(() => {
        debugger;
      });
    // setTodo(todoList);
  }, []);
  if (!smurfList) {
    return <div>'loading'</div>;
  }

  return (
    <div className='App'>
      <smurfContext.Provider value={smurfList}>
        <SmurfList />
      </smurfContext.Provider>
    </div>
  );
}

export default App;
