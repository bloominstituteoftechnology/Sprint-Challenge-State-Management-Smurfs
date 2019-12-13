import React, { Component } from "react";
import "./App.css";
import { Provider } from 'react-redux';
import Posts from './Posts';
import PostForm from './Postform';
import store from '../store';










class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <PostForm/>
        <hr/>
        <Posts/>
      </div>
      </Provider>
    );
  }
}

export default App;
