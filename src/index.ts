/*
    ./source/index.js
    which is the webpack entry file
*/
import "./assets/stylesheets/styles.scss"
import { Display } from "rot-js"

// React imports
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './app/App.jsx';

// React Render to page
// ReactDOM.render(<App />, document.getElementById('root'));
let display = new Display({ width: 80, height: 50, layout: "rect" })
let container = display.getContainer()
document.body.appendChild(container)
display.draw(5, 4, "@")
display.draw(15, 4, "%", "#0f0") // foreground color
display.draw(25, 4, "#", "#f00", "#009")
