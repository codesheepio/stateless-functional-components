import React from 'react';
import { withState } from 'recompose';

import Counter from './Counter';
import Button from './Button';


function Clicker({ state, setState }) {
  const { counter, history } = state;
  const setCounter = (nextCounter, label) => () => {
    setState({
      counter: nextCounter,
      history: nextCounter === 0 ? [] : [
        ...history,
        `${label} > ${nextCounter}`
      ]
    });
  };

  return (
    <div>
      <Counter value={ counter } />
      <Button onClick={
        setCounter(counter + 1, '+1')}>+</Button>
      <Button onClick={
        setCounter(counter + 7, '+7')}>+7</Button>
      <Button onClick={
        setCounter(counter + 17,'+17')}>+17</Button>
      <Button onClick={
        setCounter(0, 'Reset')}>Reset</Button>
      <hr/>
      <h4>History</h4>
      <ul>
        { history.map((step, i) => <li key={ i }>{ step }</li>) }
      </ul>
    </div>
  );
}

export default withState('state', 'setState', {
  counter: 0,
  history: [],
})(Clicker);
