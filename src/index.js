/** @format */

import React from 'react';
import ReactDOM from 'react-dom';
import './app/Layout/styles.css';
import App from './app/Layout/App';
import 'semantic-ui-css/semantic.min.css';
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
