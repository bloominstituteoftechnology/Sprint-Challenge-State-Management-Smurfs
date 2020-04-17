import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchInfo } from '../actions';

const RetrieveMeThisTime = (props) => {
    useEffect(() => {
        props.fetchInfo();
    }, []);
    console.log('RetMe Props: ', props);
    return (
        <div>
            <h3>
                These are the smurfs of the village. Can we make them grow in
                size, not physically but in nubmers????
            </h3>
        </div>
    );
};

const mapStateToProps = (state) => {
    console.log('mapStateToProps state: ', state);
    return {
        info: state.info.info,
        isFetching: state.info.isFetching,
        error: state.info.error,
    };
};
export default connect(mapStateToProps, { fetchInfo })(RetrieveMeThisTime);
