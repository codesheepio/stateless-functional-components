import React from 'react';

class App extends React.Component {
  handleClick(name) {
    return () => {
      console.log(`${name} clicked`);
    }
  }

  render() {
    return (
      <div>
        <h1>React Events</h1>
        <button onClick={this.handleClick('Play')}>
          Play
        </button>
        <button onClick={this.handleClick('Reset')}>
          Reset
        </button>
     </div>
    );
  }
}

export default App;
