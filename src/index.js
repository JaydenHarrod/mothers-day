import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

var mountNode = document.getElementById('app');

const Root = () => {
  return <App />;
};

ReactDOM.render(<Root />, mountNode);
