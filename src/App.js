import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      paragraph: ''
    };
  }

  handleClick(name) {
    return () => {
      this.setState({
        paragraph: `${name} clicked`
      });
    }
  }

  render() {
    const { paragraph } = this.state;

    return (
      <div>
        <h1>React Events</h1>
        <p>{paragraph}</p>
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
