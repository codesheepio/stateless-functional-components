import React from 'react';
import ReactDOM from 'react-dom';

function render() {
  const MOUNT_ROOT = document.getElementById('root');

  ReactDOM.render(
    <h1>Hello My First React</h1>,
    MOUNT_ROOT
  );
}

render();
