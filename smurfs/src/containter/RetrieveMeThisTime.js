import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchInfo } from '../actions';

const RetrieveMeThisTime = (props) => {
    useEffect(() => {
        props.fetchInfo();
    }, []);
    console.log('RetMe Props: ', props);
    return <h3>test</h3>;
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
