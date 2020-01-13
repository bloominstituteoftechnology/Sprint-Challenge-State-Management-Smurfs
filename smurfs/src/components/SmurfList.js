import React, { useEffect } from 'react';
import Smurf from './Smurf';
import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions/actions';
import './App.css';
import Card from '@material-ui/core/Card';


const Smurflist = (props) => {

    useEffect(() => {
        props.fetchSmurfs()
    }, [])

    return (
        <Card className='smurflist'>
            {props.smurfs.map(smurf => {
                return <Smurf className='smurfs' smurf={smurf}/>
            })}
        </Card>
    )
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, {fetchSmurfs})(Smurflist)