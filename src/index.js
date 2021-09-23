import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { CustomContextProvider } from "./Context/CustomContext";

ReactDOM.render(
  <React.StrictMode>
    <CustomContextProvider>
      <App />
    </CustomContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
