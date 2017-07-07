import React from 'react';
import PropTypes from 'prop-types';

function Counter(props) {
  return (
    <h3>
      { props.value }
    </h3>
  )
}
Counter.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Counter;
