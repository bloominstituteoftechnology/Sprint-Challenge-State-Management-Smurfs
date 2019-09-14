import React, { useState, useReducer } from "react";
import { connect } from 'react-redux';

import { getSmurfs} from '../store/actions';
import { reducer } from "../store/reducers"

// const SmurfList = ({ getSmurfs, smurfs, fetchingSmurfs, error }) => {
//    useEffect (()=> {
//           getSmurfs();
//    },[getSmurfs])
   
//need add | this on load- so smurf Brainey shows up.

    //getSmurfs


const SmurfList = (props) => {

    const [state, dispatch] = useReducer(reducer);

    const [newTitleText, setNewTitleText,] = useState("");


    // dispatch({ type: "FETCH_SMURF_START", payload: state.id })

    // {state.map(state=> {
    //     return( 
        

    //          <div onClick={() => {
    //              dispatch({ type: "FETCH_SMURF_START", payload: state.id });
                
    //           }} >

    //            { state.smurf }
              
    //            </div>   
    //     )
         
    // }
    //     )}  




console.log(props)

//  if(fetchingSmurfs){
//     return <h2>fetching Smurf</h2>;
//  }

//FETCH_SMURF_START
//FETCH_SMURF_SUCCESS

        return(

        <div>
            <h1>SMURF YA</h1>
         {props.smurfs.map(smurf => {
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

