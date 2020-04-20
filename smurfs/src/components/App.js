import React, { useEffect } from 'react';
import './App.css';

import { connect } from 'react-redux';
import { getSmurfAsync } from '../redux/actionCreators';

const App = ({
    getSmurfAsync,
    smurfs,
    fetchingSmurfs,
    fetchingSmurfsError,
}) => {
    useEffect(() => {
        getSmurfAsync();
    }, []);
    return <div className="App">{fetchingSmurfs && <p>Fetching ... </p>}</div>;
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { getSmurfAsync })(App);
