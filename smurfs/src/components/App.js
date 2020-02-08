import React , { useEffect }  from "react";
import { useDispatch } from "react-redux"; 
import { getSmurfs } from "../actions";

import "./App.css";
import SmurfsForm from "./SmurfsForm";
import SmurfsList from "./SmurfsList";

function App () {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSmurfs());
  }, []);

    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <SmurfsForm/>
        <SmurfsList/>
      </div>
    );
}

export default App;
