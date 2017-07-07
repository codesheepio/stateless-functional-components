import React from 'react';
import PropTypes from 'prop-types';

function Hello(props) {
  return (
    <div>
      <h1>Hello {props.name}</h1>
      <h2>{props.children}</h2>
    </div>
  );
}
Hello.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
Hello.defaultProps = {
  children: 'How are you?'
};

export default Hello;
