import React  from "react";
import axios from 'axios';
import SmurfContext from '../contexts/SmurfContext'
import "./App.css";
import SmurfsList from "./SmurfsList";
import SmurfForm from "./SmurfForm";

class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      smurfs:[],
    }
  }

componentDidMount(){
  axios
      .get('http://localhost:3333/smurfs')
      .then((response) => {
        //console.log(response.data,"response here")
        const smurfsList = response.data
        this.setState({smurfs: smurfsList});
      })
      .catch((err) => (err));
  };
  
  render() {
    return (
    <SmurfContext.Provider value ={this.state.smurfs}>
      <div className="App">
      <h1>SMURFS! 2.0 W/ CONTEXT API</h1>
        <SmurfForm/>
        <SmurfsList/>
           
      </div>
    </SmurfContext.Provider>
    );
  }
}
export default App;
