import React, { useState } from 'react';
import calculate from '../logic/calculate';
import MainKeys from './common/MainKeys';

function Calculator() {
  const [obj, setObject] = useState({ total: null, next: null, operation: null });
  const [enteredValue, setEnteredValue] = useState(0);

  const keyValues = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

  const handleSelectedValue = (event) => {
    const result = calculate(obj, event.target.value);
    const { next, total, operation } = result;

    if (total) setEnteredValue(total);
    else if (operation && next) setEnteredValue(next);
    else setEnteredValue(0);

    setObject(result);
  };

  let value = enteredValue;
  if (obj.next) value = obj.next;

  const addClass = (arr, e) => {
    let classname = 'calculator__column calculator__column--main';
    if (arr.indexOf(e) === arr.length - 1 && arr.length !== 1) {
      classname = 'calculator__column calculator__column--side';
    }
    return classname;
  };

  const displayKey = (start, end, span) => keyValues.slice(start, end).map((e) => (
    <MainKeys
      key={e}
      value={e}
      colSpan={span}
      className={addClass(keyValues.slice(start, end), e)}
      handleClick={handleSelectedValue}
    />
  ));

  return (
    <table className="calculator">
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
    </table>
  );
}

export default Calculator;
