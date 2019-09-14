import React, { useState, useReducer } from "react";
import { connect } from 'react-redux';
import axios from 'axios';

import { getSmurfs} from '../store/actions';
import { reducer } from "../store/reducers"

import SmurfForm from "./SmurfForm";



// const SmurfList = (props) => {

//     const [state, dispatch] = useReducer(reducer);

//     const [newTitleText, setNewTitleText,] = useState("");
//     console.log(props)


    class SmurfList extends React.Component {

        constructor(){
          super()
          this.state = {
            smurf: {},
            
          };
        }
      
      
          componentDidMount() {
            console.log("first rendre(mounting)");
            axios
            .get('http://localhost:3333/smurfs')
            .then(res => this.setState({ smurf: res.data }))
            //.catch(err => console.log("error")); 
          }







//  if(fetchingSmurfs){
//     return <h2>fetching Smurf</h2>;
//  }

render() {
    return(

        <div>

            
            <h1>SMURF YA</h1>
         {this.state.smurfs.map(smurf => {
           return (  
            
            <div>
           
           <h3>{smurf.name}</h3>
             <p>{smurf.age}</p>
             <p>{smurf.height}</p> 

            </div>)
         } )}
            
        </div>
    )
}

        

    }


const mapStateToProps = state => {
    return{
      smurfs: state.smurfs,
      fetchingSmurfs: state.fetchingSmurfs,
      error: state.error
    };
};

export default connect(
    mapStateToProps,
    {getSmurfs}
)(SmurfList);

