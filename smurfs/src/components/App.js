import React, { useEffect } from 'react';
import './App.css';

import { connect } from 'react-redux';
import { getSmurfAsync } from '../redux/actionCreators';
import Form from './Form';

const App = ({
    getSmurfAsync,
    smurfs,
    fetchingSmurfs,
    fetchingSmurfsError,
}) => {
    useEffect(() => {
        getSmurfAsync();
    }, []);
    return (
        <div className="App">
            {fetchingSmurfs && <p>Fetching ... </p>}
            <Form />{' '}
        </div>
    );
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { getSmurfAsync })(App);
