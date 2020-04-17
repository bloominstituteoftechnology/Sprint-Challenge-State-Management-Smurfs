import React from 'react';
import { connect } from 'react-redux';
import { fetchInfo } from '../actions';

const RetrieveMeThisTime = (props) => {
    useEffect(() => {
        props.fetchInfo();
    }, []);

    console.log(props);
};
