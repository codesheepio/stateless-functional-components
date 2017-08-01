import React from 'react';
import PropTypes from 'prop-types';

function Counter({ value }) {
  return (
    <h3>
      { value }
    </h3>
  )
}
Counter.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Counter;
