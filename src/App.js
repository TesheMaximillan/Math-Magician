import React from 'react';

import Calculator from './components/Calculator';
import './styles/main.scss';

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <Calculator />
      </div>
    );
  }
}

export default App;
