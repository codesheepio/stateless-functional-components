import React from 'react';

import Hello from './Hello';

class App extends React.Component {
  render() {
    return (
      <div>
        <Hello name="Goku" >
          Meteor Strike
        </Hello>
        <Hello name="Gohan" >
          Kame Hame Ha
        </Hello>
      </div>
    );
  }
}

export default App;
