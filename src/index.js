import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./app";

import "./style.scss";
import "bootstrap/dist/css/bootstrap.css";
// import "material-design-icons/iconfont/material-icons.css";
import "../public/icons/cv_icons/flaticon.css";

const wrapper = document.getElementById("container");
wrapper &&
  ReactDOM.render(
    <Router>
      <App />
    </Router>,
    wrapper
  );
