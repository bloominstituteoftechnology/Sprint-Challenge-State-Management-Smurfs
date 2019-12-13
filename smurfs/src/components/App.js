import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
import {SmurfContext} from '../context/context'
import Form from './Form'
import List from './List'
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
		axios.post('http://localhost:3333/smurfs', smurf).then(res => {setSmurfs(res.data)})
	};

	const Remove = smurf => {
		axios
			.delete(`http://localhost:3333/smurfs/:id${smurf}`)
			.then(res => {
				setSmurfs(res.data);
			})
		
	};

    return (
      <SmurfContext.Provider value={{smurfs, setSmurfs, Add, Remove}}>
        <div className="App">
          <h1>SMURFS! 2.0 W/ Redux</h1>
        <List />
        <Form />
        </div>
      </SmurfContext.Provider>
    );

}

export default App;
