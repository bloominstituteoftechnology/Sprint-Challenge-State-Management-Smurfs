import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import axios from "axios";

import { fetchData } from "../actions";
import Card from "./Card";
import ItemForm from "./ItemForm";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    this.props.fetchData();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.data !== this.props.data) {
      this.setState({ data: this.props.data })
    }
  }
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        {this.state.data && this.state.data.map(data => <Card key={data.id} {...data} />)}
        <ItemForm />
      </div>
    );
  }
}

const mapStateToProps = state => ({ 
  data: state.data
})

export default connect(mapStateToProps, { fetchData })(App);
