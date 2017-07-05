import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      paragraph: 'Playing',
      playing: true,
    };
  }

  handleClick(name) {
    return () => {
      const paragraph = `${name} clicked`;
      switch (name) {
        case 'Play':
        case 'Pause':
          this.setState({
            paragraph,
            playing: name === 'Play'
          });
          break;

        case 'Reset':
          this.setState({ paragraph });
          break;
      }
    }
  }

  render() {
    const { playing, paragraph } = this.state;
    const play = playing ? 'Pause' : 'Play';
    return (
      <div>
        <h1>React Events</h1>
        <p>{paragraph}</p>
        <button onClick={this.handleClick(play)}>
          { play }
        </button>
        <button onClick={this.handleClick('Reset')}>
          Reset
        </button>
     </div>
    );
  }
}

export default App;
