import React from "react"
import ReactDOM from "react-dom"
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import { composeWithDevTools } from "redux-devtools-extension"
import reduxThunk from "redux-thunk"

import App from "./components/App"
import "./index.css"

import rootReducer from "./store/reducers"

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(reduxThunk))
)

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById("root")
)
