import React from 'react';
import ReactDOM from 'react-dom';
import App from "./app";

import './style.scss';
import 'bootstrap/dist/css/bootstrap.css';

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;