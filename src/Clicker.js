import React from 'react';

class Clicker extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };
  }

  setCounter(counter) {
    return () => this.setState({ counter });
  }

  render() {
    const { counter } = this.state;

    return (
      <div>
        <h3>{ counter }</h3>
        <button onClick={this.setCounter(counter + 1)}>+</button>
        <button onClick={this.setCounter(counter + 7)}>+7</button>
        <button onClick={this.setCounter(counter + 17)}>+17</button>
        <button onClick={this.setCounter(0)}>Reset</button>
      </div>
    )
  }
}

export default Clicker;
