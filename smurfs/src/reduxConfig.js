import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import thunk from "redux-thunk";

const configRedux = () => createStore(reducer, applyMiddleware(thunk));

export default configRedux;