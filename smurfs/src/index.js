import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./components/App";
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reducer } from './reducers';

import SmurfList from './/components/SmurfList';
import FormikAppForm from '../src/form/Form'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

function App () {
    return (
      <div className="App">
        <form action=""></form>
        <SmurfList />
      </div>
    );
  }

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
      <FormikAppForm />
    <App />
  </Provider>,
  rootElement
);
