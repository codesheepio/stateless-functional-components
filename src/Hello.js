import React from 'react';

class Hello extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <h2>How are you doing ?</h2>
      </div>
    );
  }
}

export default Hello;
