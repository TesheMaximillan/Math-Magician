import React from 'react';
import PropTypes from 'prop-types';

function MainKeys(props) {
  const {
    value, handleClick, className, colSpan,
  } = props;

  return (
    <td className={className} colSpan={colSpan}>
      <input type="button" value={value} onClick={handleClick} />
    </td>
  );
}

MainKeys.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  colSpan: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default MainKeys;
