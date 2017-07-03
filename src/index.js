import React from 'react';
import ReactDOM from 'react-dom';

function render() {
  const MOUNT_ROOT = document.getElementById('root');

  ReactDOM.render(
    <ul>
      <li>Pen</li>
      <li>Pine apple</li>
      <li>Apple</li>
    </ul>,
    MOUNT_ROOT
  );
}

render();
