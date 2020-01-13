import React, {useEffect} from 'react';
import { connect} from 'react-redux';
import { getSmurfs } from '../actions';
import Smurf from './smurf';
import Loader from 'react-loader-spinner';

function Smurfs_List(props) {

    const { getSmurfs} = props;

    useEffect(() => {
        getSmurfs();
    }, [getSmurfs])

    return (
        <div className = 'smurfs-list'>
            {props.isFetching && (
        <Loader type="Puff" color="#00BFFF" height={100} width={100} />
      )}
            { props.smurfs.map( (each, index) =>
             <Smurf key = {index}  each ={each} />
                )}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        error: state.eroor
    }
}

export default connect(mapStateToProps, {getSmurfs})(Smurfs_List) 