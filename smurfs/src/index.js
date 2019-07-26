import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import 'semantic-ui-css/semantic.min.css'
import App from "./components/App";

//redux stuff
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { smurfReducer } from "./store/reducer"

const store = createStore(smurfReducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById("root"));
