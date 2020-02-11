import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions';

const Smurfs = props => {

    const getSmurfs = props.getData
    useEffect(() => {
        getSmurfs()
    }, [getSmurfs])

    if (props.isFetchingData === true) {
        return <p>Please be patient while the smurfs load...</p>
    }

    return (
        <div>
            {props.error ? (
                <div>{props.error}</div>
            ) : (
                    props.smurfList.map(smurf => {
                        return (
                            <div key={smurf.id}>
                                <h1>Name: {smurf.name}</h1>
                                <h3>Age: {smurf.age}</h3>
                                <h3>Height: {smurf.height}</h3>
                            </div>
                        )
                    })
                )}

        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfList: state.smurfList,
        error: state.error,
        isFetchingData: state.isFetchingData
    }
}

export default connect(
    mapStateToProps,
    { getData }
)(Smurfs);