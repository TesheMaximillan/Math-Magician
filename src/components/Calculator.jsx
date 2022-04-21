import React from 'react';
import calculate from '../logic/calculate';
import MainKeys from './common/MainKeys';

class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      obj: { total: null, next: null, operation: null },
      enteredValue: 0,
    };
    this.handleSelectedValue = this.handleSelectedValue.bind(this);
    // eslint-disable-next-line max-len
    this.keyValues = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
  }

  handleSelectedValue(event) {
    const { obj } = this.state;
    const result = calculate(obj, event.target.value);
    const { next, total, operation } = result;

    if (total) this.setState({ enteredValue: total });
    else if (operation && next) this.setState({ enteredValue: next });
    else this.setState({ enteredValue: 0 });

    this.setState({ obj: result });
  }

  render() {
    const { obj, enteredValue } = this.state;
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
          {this.keyValues.slice(0, 4).map((e) => (
            <MainKeys
              key={e}
              value={e}
              className={addClass(this.keyValues.slice(0, 4), e)}
              handleClick={this.handleSelectedValue}
            />
          ))}
        </tr>
        <tr>
          {this.keyValues.slice(4, 8).map((e) => (
            <MainKeys
              key={e}
              value={e}
              className={addClass(this.keyValues.slice(4, 8), e)}
              handleClick={this.handleSelectedValue}
            />
          ))}
        </tr>
        <tr>
          {this.keyValues.slice(8, 12).map((e) => (
            <MainKeys
              key={e}
              value={e}
              className={addClass(this.keyValues.slice(8, 12), e)}
              handleClick={this.handleSelectedValue}
            />
          ))}
        </tr>
        <tr>
          {this.keyValues.slice(12, 16).map((e) => (
            <MainKeys
              key={e}
              value={e}
              className={addClass(this.keyValues.slice(12, 16), e)}
              handleClick={this.handleSelectedValue}
            />
          ))}
        </tr>
        <tr>
          {this.keyValues.slice(16, 17).map((e) => (
            <MainKeys
              colSpan={2}
              key={e}
              value={e}
              className="calculator__column calculator__column--main"
              handleClick={this.handleSelectedValue}
            />
          ))}
          {this.keyValues.slice(17, 19).map((e) => (
            <MainKeys
              key={e}
              value={e}
              className={addClass(this.keyValues.slice(17, 19), e)}
              handleClick={this.handleSelectedValue}
            />
          ))}
        </tr>
      </table>
    );
  }
}

export default Calculator;
