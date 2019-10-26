import React, {useEffect} from "react";
import {fetchSmurfs} from '../actions'
import {connect} from 'react-redux'
import "./App.css";




function App(props) {

useEffect(() => {
  props.fetchSmurfs()
}, []) 

   return (
      <div className="App">
        {/* <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div> */}
        
      </div>
    );
  }




function mapStateToProps(state) {
  return {
  isSmurfLoading: state.isSmurfLoading,
  smurfFilm: state.film,
  filmError: state.error
  }
}


const mapDispatchToState = {
  
    fetchSmurfs
  
}

export default connect(mapStateToProps, mapDispatchToState)(App);
