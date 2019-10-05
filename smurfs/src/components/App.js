import React, { Component } from "react";
import "./App.css";
import AddUserForm from './Rest/AddUserForm';
import UserList from './Rest/UserList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <br />
        <AddUserForm />
     <UserList />
      </div>
    );
  }
}

export default App;
