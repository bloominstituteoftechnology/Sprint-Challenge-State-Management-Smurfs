import React, { Component } from "react";

import "./App.css";
import Header from "./Header"
import Smurfy from "./Smurfy";


const App = () => {
	return (
		<div className="App">
			<h1>SMURFS! 2.0 W/ Redux</h1>
			<div>Welcome to your state management version of Smurfs!</div>
			<div>&nbsp;</div>
			<Header />
			<Smurfy />
		</div>
	);
};

export default App;