import React, { useEffect } from 'react';

//import connect
import { connect } from 'react-redux';

//import action
import { fetchSmurfData } from '../actions/index';

//import Smurf List
import SmurfList from './SmurfList';

const Smurfs = ({fetchSmurfData, smurfs}) => {
    useEffect(() => {
        fetchSmurfData();
    }, [fetchSmurfData])

    return(
        <div>
            <h3>Smurf Village</h3>
            <SmurfList smurfs = {smurfs} />
            
        </div>
    )
}
const mapStateToProps = state => {
    return {
        name: state.name,
        age: state.age,
        height: state.height
    }
}

export default connect(mapStateToProps, {fetchSmurfData: fetchSmurfData})(Smurfs);