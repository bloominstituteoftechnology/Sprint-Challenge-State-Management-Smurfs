import React, { useEffect } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
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
            <nav>
                <Link to="/">home</Link>
                <Link to="/add">add</Link>
            </nav>
            <Switch>
                <Route path="/add" component={Form} />
                <Route
                    path="/"
                    exact
                    render={(props) => {
                        return (
                            <>
                                {fetchingSmurfs && <p>Fetching ... </p>}

                                {!fetchingSmurfs &&
                                    smurfs.map(({ id, name, age, height }) => (
                                        <div key={id}>
                                            <p>Say hi to {name}.</p>
                                            <p>They are {age} years old.</p>
                                            <p>And this tall: {height}.</p>
                                        </div>
                                    ))}
                            </>
                        );
                    }}
                />
                <Redirect to="/" />
            </Switch>
        </div>
    );
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { getSmurfAsync })(App);
