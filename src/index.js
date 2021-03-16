/** @format */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/Layout/App';
import reportWebVitals from './reportWebVitals';

const rootId = document.getElementById('root');
function render() {
  ReactDOM.render(<App />, rootId);
}
if (module.hot) {
  module.hot.accept('./app/Layout/App', function () {
    setTimeout(render);
  });
}
render();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
