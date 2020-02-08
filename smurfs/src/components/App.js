import React from "react";
import "./App.css";
import Call from './Call';
import Post from './Post';
import { Alert } from 'reactstrap';



const App = ()=> {
  
    return (
      <div className="App">
        <Alert color="dark"><h1>SMURFS! 2.0 W/ Redux</h1></Alert>
        <Post />
        <Call />
      </div>
    );
  
}

export default App;
