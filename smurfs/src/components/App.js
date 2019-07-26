import React, { useState, useEffect} from "react";
import "./App.css";
import {SmurfList} from './SmurfList'
import {Route, Link} from "react-router-dom"
import {SmurfContext} from "./contexts/smurfContext.js"
import {SmurfForm} from "./SmurfForm"
import axios from "axios"

function App() {
  const [smurfs, setSmurfs] = useState([]);

  useEffect(() => {
    const fetchSmurfs = async () => {
      const result = await axios(
        'http://localhost:3333/smurfs',
      );
      setSmurfs(result.data);
    };
    fetchSmurfs();
  }, []);

  const addSmurf = (event, name, age, height) => {
    const newSmurf = {
      name: name, 
      age: age,
      height: height
    }
    event.preventDefault();
    axios 
      .post('http://localhost:3333/smurfs', newSmurf)
      .then (res => {
        setSmurfs(res.data)
      })
      .catch(err => {
        console.log(err.response)
      })
  }

  const deleteSmurf = (e, smurf) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:3333/smurfs/${smurf.id}`)
      .then(res => {
        setSmurfs(res.data)
      })
      .catch(err => {
        console.log(err);
      });
  };

	return (
		<div className="App">
			<SmurfContext.Provider value={{smurfs, addSmurf, deleteSmurf}}>
          {/* Routes */}
          <Link to="/form">Add a Smurf</Link>
          <Link to="/">Go to the Village</Link>
					<Route
						exact
						path="/"
						component={SmurfList}
					/>
          <Route
						exact
						path="/form"
						component={SmurfForm}
					/>
			</SmurfContext.Provider>
		</div>
	);
}

export default App;