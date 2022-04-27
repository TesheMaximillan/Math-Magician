/* eslint-disable react/prop-types */
import React from 'react';

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

export default MainKeys;
