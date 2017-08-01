import React from 'react';
import PropTypes from 'prop-types';

function Button({ children, onClick }) {
  return (
    <button onClick={onClick} style={{ width: 60, color: '#00e' }}>
      { children }
    </button>
  )
}
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
