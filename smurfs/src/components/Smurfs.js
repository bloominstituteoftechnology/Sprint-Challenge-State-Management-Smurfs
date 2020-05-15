import React from 'react'
import { connect } from 'react-redux';

import { fetchSmurfs } from '../store/actions';

let Smurfs = props => {
    // console.log(props.smurfs, 'asdfasdfasdfasdfasdfasd')
    // console.log(props, 'asdfasdfasdfasdf')
    return (
        <>
        <h3>All Smurfs</h3>
        <button onClick={() => fetchSmurfs()}>Get all the Smurfs</button>
        </>
    )
}

let mapStateToProps = state => {
    return {
        isFetching: state.smurfs.isFetching,
        smurfs: state.smurfs.smurfs
    }
}

export default connect(mapStateToProps, {fetchSmurfs})(Smurfs);