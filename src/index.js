import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// Reducers import
import reducers from "./store";
import { createStore } from "redux";
import { Provider } from "react-redux";

// store creation
const store = createStore(reducers);

ReactDOM.render(
  <React.StrictMode>
    {/* Wrap app with provider */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
