import React from 'react';

class App extends React.Component {
  handleClick() {
    console.log('clicked');
  }

  render() {
    return (
      <div>
        <h1>React Events</h1>
        <button onClick={this.handleClick}>
          Play
        </button>
     </div>
    );
  }
}

export default App;
