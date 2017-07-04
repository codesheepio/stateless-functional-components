import React from 'react';

import Hello from './Hello';

class App extends React.Component {
  render() {
    return (
      <div>
        <Hello name="Goku" />
        <Hello name="Gohan" />
      </div>
    );
  }
}

export default App;
