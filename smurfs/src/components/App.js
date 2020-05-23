import React  from "react";
import axios from 'axios';
import SmurfContext from '../contexts/SmurfContext'
import FormContext from '../contexts/FormContext'
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
  addSmurf = item => {
  this.setState([{...this.state.smurfs}, item]);
    };

  delSmurf = id => {
    const newArray = this.state.smurfs.filter(item => {
      return item.id !== id;
    });
    this.setState({smurfs: newArray});
  };
   delSmurf = (id) => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then((res) => {
       console.log(res,"deleted!");
      })
      .catch((err) => (err));
  };

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
    <SmurfContext.Provider value ={[this.state.smurfs, this.delSmurf]}>
    <FormContext.Provider value ={this.addSmurf}>
    <div className="App">
      <h1>SMURFS! 2.0 W/ CONTEXT API</h1>
        <SmurfForm/>
        <SmurfsList/>
           
      </div>
    </FormContext.Provider>
    </SmurfContext.Provider>
    );
  }
}
export default App;

// import React, { useState, useEffect } from "react";
// import axios from 'axios';
// import SmurfContext from '../contexts/SmurfContext'
// import "./App.css";
// import SmurfsList from "./SmurfsList";
// import SmurfForm from "./SmurfForm";

// function App () {
 
//   const [smurf,setSmurf] = useState([]);

// 	const addSmurf = item => {
// 		setSmurf([...smurf, item]);
//   };
  
// useEffect (()=>{
//   axios
//       .get('http://localhost:3333/smurfs')
//       .then((response) => {
//         //console.log(response.data,"response here")
//         const smurfsList = response.data
//         setSmurf(smurfsList);
//       })
//       .catch((err) => (err));
// },[])
  
//     return (
//     <SmurfContext.Provider value ={smurf, addSmurf}>
//       <div className="App">
//       <h1>SMURFS! 2.0 W/ CONTEXT API</h1>
//         <SmurfForm/>
//         <SmurfsList/>    
//       </div>
//     </SmurfContext.Provider>
//     );
// }
// export default App;
