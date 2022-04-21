import React from 'react';
import PropTypes from 'prop-types';

class MainKeys extends React.PureComponent {
  render() {
    const {
      value, handleClick, className, colSpan,
    } = this.props;
    return (
      <td className={className} colSpan={colSpan}>
        <input type="button" value={value} onClick={handleClick} />
      </td>
    );
  }
}

MainKeys.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  colSpan: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default MainKeys;
