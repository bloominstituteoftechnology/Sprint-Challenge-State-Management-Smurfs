import React, {useEffect} from 'react';
import SmurfCard from './SmurfCard';
import {fetchData} from '../actions/action';
import {connect} from 'react-redux';

const Smurf = props => {
    useEffect(() => {
        props.fetchData()
    }, []);
    if (props.isFetching){
        return (
            <div>
                <h2>Trying to find your Smurf</h2>
            </div>
        )
    }
    return (
        <div>
        {props.error && <p>{props.error}</p>}
        {props.smurfData.map(data => (
            <SmurfCard key={data.id} data={data} />
        ))}
    </div>
    )
}


const mapStateToProps = state => {
    return {
        smurfData: state.smurfData,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(
    mapStateToProps,
    {fetchData}
)(Smurf)