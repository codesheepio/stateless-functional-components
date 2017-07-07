import React from 'react';

import Counter from './Counter';
import Button from './Button';

class Clicker extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      history: [],
    };
  }

  setCounter(counter, label) {
    return () => this.setState({
      counter,
      history: counter === 0 ? [] : [...this.state.history, `${label} > ${counter}`],
    });
  }

  render() {
    const { counter, history } = this.state;

    return (
      <div>
        <Counter value={ counter } />
        <Button onClick={this.setCounter(counter + 1, '+1')}>+</Button>
        <Button onClick={this.setCounter(counter + 7, '+7')}>+7</Button>
        <Button onClick={this.setCounter(counter + 17, '+17')}>+17</Button>
        <Button onClick={this.setCounter(0, 'Reset')}>Reset</Button>
        <hr/>
        <h4>History</h4>
        <ul>
          { history.map((step, i) => <li key={ i }>{ step }</li>) }
        </ul>
      </div>
    );
  }
}

export default Clicker;
