import React, { Component } from "react";
import "./App.css";
import axios from 'axios';

class App extends Component {

    constructor () {
      super()

      this.state = {
        name: '',
        age: '',
        height: ''
      }
  
    }

     handleOnSubmit = (event) => {
      event.preventDefault();
      axios
        .post(`http://localhost:3333/smurfs`)
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }

    handleOnChangeName = (event) => {
      this.setState({
        name: event.target.value
      });
    }

    handleOnChangeAge = (event) => {
      this.setState({
        age: event.target.value
      });
    }

        handleOnChangeHeight = (event) => {
      this.setState({
        height: event.target.value
      });
    }

    

  render() {
    return (
      <div className="App">
        <h1>Who the Smurf Are You?</h1>
        <form onSubmit={this.handleOnSubmit}>
          <input onChange={this.handleOnChangeName} type='text' name='name' placeholder='What`s your smurfin` name?'></input>
          <input onChange={this.handleOnChangeAge} type='text' name='age' placeholder='What`s your smurfin` age?'></input>
          <input onChange={this.handleOnChangeHeight} type='text' name='height' placeholder='How smurfin` tall are ya?'></input>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
