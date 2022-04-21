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
    if (arr.indexOf(e) === arr.length - 1) {
      classname = 'calculator__column calculator__column--side';
    }
    return classname;
  };

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
      <tr className="calculator__row">
        {keyValues.slice(0, 4).map((e) => (
          <MainKeys
            key={e}
            value={e}
            className={addClass(keyValues.slice(0, 4), e)}
            handleClick={handleSelectedValue}
          />
        ))}
      </tr>
      <tr>
        {keyValues.slice(4, 8).map((e) => (
          <MainKeys
            key={e}
            value={e}
            className={addClass(keyValues.slice(4, 8), e)}
            handleClick={handleSelectedValue}
          />
        ))}
      </tr>
      <tr>
        {keyValues.slice(8, 12).map((e) => (
          <MainKeys
            key={e}
            value={e}
            className={addClass(keyValues.slice(8, 12), e)}
            handleClick={handleSelectedValue}
          />
        ))}
      </tr>
      <tr>
        {keyValues.slice(12, 16).map((e) => (
          <MainKeys
            key={e}
            value={e}
            className={addClass(keyValues.slice(12, 16), e)}
            handleClick={handleSelectedValue}
          />
        ))}
      </tr>
      <tr>
        {keyValues.slice(16, 17).map((e) => (
          <MainKeys
            colSpan={2}
            key={e}
            value={e}
            className="calculator__column calculator__column--main"
            handleClick={handleSelectedValue}
          />
        ))}
        {keyValues.slice(17, 19).map((e) => (
          <MainKeys
            key={e}
            value={e}
            className={addClass(keyValues.slice(17, 19), e)}
            handleClick={handleSelectedValue}
          />
        ))}
      </tr>
    </table>
  );
}

export default Calculator;
