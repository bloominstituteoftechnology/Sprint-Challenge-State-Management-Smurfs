import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../contexts/GlobalState";

import axios from "axios";
import "./App.css";
import SmurfList from "./SmurfList";
import SmurfForm from "./SmurfForm";

const App = () => {
  const { fetchSuccess, fetchError } = useContext(GlobalContext);

  useEffect(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then((response) => {
        fetchSuccess(response.data);
      })
      .catch((error) => {
        console.log(error.message);
        fetchError(error.message);
      });
  }, []);

  return (
    <div>
      <SmurfForm />
      <SmurfList />
    </div>
  );
};

export default App;
