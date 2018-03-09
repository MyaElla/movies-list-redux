import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import App from "./App";
import reducers from "./redux/reducers";
import registerServiceWorker from "./registerServiceWorker";

const initialStore = {
  count: 0,
  movies: []
};
const store = createStore(reducers, initialStore, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
