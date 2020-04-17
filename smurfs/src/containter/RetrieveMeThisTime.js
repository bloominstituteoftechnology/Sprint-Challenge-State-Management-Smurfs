import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchInfo } from '../actions';

const RetrieveMeThisTime = (props) => {
    useEffect(() => {
        props.fetchInfo();
    }, []);
    console.log('Props: ', props);
    return <h3>test</h3>;
};

export default RetrieveMeThisTime;
