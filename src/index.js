import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import count from "./redux/reducers";
import registerServiceWorker from "./registerServiceWorker";

const initialStore = {
  count: 0
};
const store = createStore(count, initialStore);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
