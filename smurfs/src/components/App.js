import React, { Component} from "react";
import "./App.css";

import SmurfList from "./SmurfList";
import SmurfForm from "./SmurfForm";

import { connect } from 'react-redux';



// return (
//   <div className="App">
//     <h1>My Notes</h1>
//     <NoteForm addNewNote={addNewNote} />
//     <Notes notesList={notes} />
//   </div>
// );

const smurfArray = [
  {
  name:'bena',
  age: 25,
  height: 5
},

{
  name:'paul',
  age: 28,
  height: 4
},

]

class App extends Component {

  render() {
    return (
      <div className="App">
        {/* <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div> */}

        <div>{smurfArray.length}</div>
        <SmurfForm/>
        <SmurfList smurfs={smurfArray}/>

        {/* ={notes} */}
        {/* addNewNote={addNewNote} */}
      </div>
    );
  }
}




export default App;

//export default App;