import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
import {SmurfContext} from '../context/context'
const App = () => {
  const [smurfs, setSmurfs] = useState();

  useEffect(() => {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        console.log(res)
        setSmurfs(res.data);
        
      })
  }, []);

  const Add = smurf => {
		axios.post('http://localhost:3333/smurfs', smurf).then(res => {})
	};

	const Remove = smurf => {
		axios
			.delete(`http://localhost:3333/smurfs/${smurf}`)
			.then(res => {
				setSmurfs(res.data);
			})
		
	};

    return (
      <SmurfContext.Provider value={{smurfs, setSmurfs, Add, Remove}}>
        <div className="App">
          <h1>SMURFS! 2.0 W/ Redux</h1>
          <div>Welcome to your state management version of Smurfs!</div>
          <div>Start inside of your `src/index.js` file!</div>
          <div>Have fun!</div>
        </div>
      </SmurfContext.Provider>
    );

}

export default App;
