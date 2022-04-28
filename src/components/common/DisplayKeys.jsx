/* eslint-disable react/prop-types */
import React from 'react';

function DisplayKeys(props) {
  const { value, displayKey } = props;
  return (
    <table className="calculator">
      <thead />
      <tbody>
        <tr className="calculator__row">
          <td
            className="calculator__column calculator__column--top"
            colSpan="4"
          >
            <input type="text" className="result" disabled value={value} />
          </td>
        </tr>
        <tr className="calculator__row">{ displayKey(0, 4) }</tr>
        <tr className="calculator__row">{ displayKey(4, 8) }</tr>
        <tr className="calculator__row">{ displayKey(8, 12) }</tr>
        <tr className="calculator__row">{ displayKey(12, 16) }</tr>
        <tr className="calculator__row">
          { displayKey(16, 17, 2) }
          { displayKey(17, 19) }
        </tr>

      </tbody>
      <tfoot />
    </table>
  );
}

export default DisplayKeys;
