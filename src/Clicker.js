import React from 'react';

import Counter from './Counter';
import Button from './Button';

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
        <Counter value={ counter } />
        <Button onClick={this.setCounter(counter + 1)}>+</Button>
        <Button onClick={this.setCounter(counter + 7)}>+7</Button>
        <Button onClick={this.setCounter(counter + 17)}>+17</Button>
        <Button onClick={this.setCounter(0)}>Reset</Button>
      </div>
    )
  }
}

export default Clicker;
