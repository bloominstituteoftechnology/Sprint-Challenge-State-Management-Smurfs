import React, { Component } from "react";
import "./App.css";
import Posts from './Posts';
import PostForm from './Postform';



class App extends Component {
  render() {
    return (      
      <div className="App">
        <h1>SMURFS! W/ Redux</h1>
        <PostForm/>
        <hr/>
        <Posts/>
      </div>
    );
  }
}

export default App;
