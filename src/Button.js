import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  return (
    <button onClick={props.onClick}>
      { props.children }
    </button>
  )
}
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
