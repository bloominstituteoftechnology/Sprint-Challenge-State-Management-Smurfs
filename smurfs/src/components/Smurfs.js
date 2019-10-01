import React, { useEffect } from 'react';

//import connect
import { connect } from 'react-redux';

//import action
import { fetchSmurfData } from '../actions/index';

//import Smurf Form
import SmurfForm from './SmurfForm';

const Smurfs = props => {
    
    useEffect(() => {
        props.fetchSmurfData();
    }, []);

      return(
        <div>
            <h3>Smurf Village</h3>
            {props.smurfData.length !== 0 ? props.smurfData.map(smurf => {
              return(<div className="smurfCard"><p>Smurf Name: {smurf.name}</p> <p>Smurf Age: {smurf.age}</p><p>Smurf Height: {smurf.height}</p></div>);
            
           }): <>Loading</>}
            <SmurfForm />
        </div>
    )
}
const mapStateToProps = state => {
    return {
       smurfData: state.smurfData
    }
}

export default connect(mapStateToProps, {fetchSmurfData: fetchSmurfData})(Smurfs);