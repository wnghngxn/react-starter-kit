import React from 'react';
import { render } from 'react-dom';
import { App } from 'app';
// todo

declare let module: {
  hot?: {
    accept: () => void;
  };
};

if (
  process.env.NODE_ENV === 'development' &&
  process.env.REACT_APP_DEV_A11Y === '0'
) {
  const axe = require('react-axe');
  const ReactDOM = require('react-dom');
  axe(React, ReactDOM, 1000);
}

const rootElement = document.getElementById('root');

render(<App />, rootElement);

if (module.hot) {
  module.hot.accept();
}
