import React, { Component, useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
import { smurfContext } from "../context/smurfContext";
import SmurfList from "./Smurflist";
import { formcontext } from "../context/smurformcontext";
import SmurfForm from "./Smurform";

function App() {
  const [smurfList, setsmurfList] = useState([]);
  const [form, setform] = useState({
    name: " ",
    age: "",
    height: " "
  });

  useEffect(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then(resp => {
        setsmurfList(resp.data);
      })
      .catch(() => {
        debugger;
      });
  }, []);

  const onSubmit = e => {
    e.preventDefault();
    console.log(form);
    axios
      .post("http://localhost:3333/smurfs", form)
      .then(res => {
        console.log(res.data);
        alert("Done");
      })
      .catch(er => {
        debugger;
      });
  };
  const onChange = e => {
    setform({ ...form, [e.target.name]: e.target.value });
  };
  if (!smurfList) {
    return <div>'loading'</div>;
  }

  return (
    <div className='App'>
      <smurfContext.Provider value={smurfList}>
        <SmurfList />
      </smurfContext.Provider>
      <formcontext.Provider value={{ form, onSubmit, onChange }}>
        <SmurfForm />
      </formcontext.Provider>
    </div>
  );
}

export default App;
