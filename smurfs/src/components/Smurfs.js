import React from 'react'
import { connect } from 'react-redux';
import Smurf from '../components/Smurf';
import { fetchSmurfs } from '../store/actions';

let Smurfs = props => {
    let {
        isFetching,
        showData,
        smurfs,
        fetchSmurfs
    } = props
    console.log(props,'alklkl')
    console.log({smurfs},'empttyyy')
    // console.log(props.smurfs, 'asdfasdfasdfasdfasdfasd')
    // console.log(props, 'asdfasdfasdfasdf')
    return (
        <>
        <h3>All Smurfs</h3>
        {/* {isFetching ? (<div>Fetching Smurfs</div>) : <div></div>} */}
        {isFetching && <div>Downloading SMURFS</div>}
        {!isFetching && <div>Lets find your SMURFS</div>}
        {showData && <div>{(smurfs[0].map(smurf => (
            <Smurf 
            key={smurf.id} 
            name={smurf.name} 
            age={Number(smurf.age)}
            height={smurf.height}
            />
        )))}
        </div>
        }
        
        <button onClick={() => fetchSmurfs()}>Get all the Smurfs</button>
        </>
    )
}

let mapStateToProps = state => {
    return {
        isFetching: state.smurfs.isFetching,
        smurfs: state.smurfs.smurfs,
        showData: state.smurfs.showData
    }
}

export default connect(mapStateToProps, {fetchSmurfs})(Smurfs);