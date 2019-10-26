import React, {useEffect} from "react";
import {fetchSmurfs} from '../actions'
import {postReducer} from '../reducers/postreducer'
import {connect} from 'react-redux'
import "./App.css";
import Form from "../Form";




function App(props) {

useEffect(() => {
  props.fetchSmurfs()
}, []) 

   return (
      <div className="App">
    
        <Form />
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
     fetchSmurfs,
     postReducer

  
}

export default connect(mapStateToProps, mapDispatchToState)(App);
