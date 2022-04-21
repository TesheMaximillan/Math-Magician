import React, { useState } from 'react';
import calculate from '../logic/calculate';
import DisplayKey from './common/DisplayKeys';
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

  let value = enteredValue;
  if (obj.next) value = obj.next;
  return <DisplayKey value={value} displayKey={displayKey} />;
}

export default Calculator;
