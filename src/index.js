import React from "react";
import ReactDOM from "react-dom/client";
import{ store} from "./redax/store"
import { Provider } from "react-redux";

import { BrowserRouter } from "react-router-dom";
import "../src/scss/app.scss";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
