import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Calculator from './components/pages/Calculator';
import NavBar from './components/pages/NavBar';
import Home from './components/pages/Home';
import NotMatch from './components/pages/NoMatch';
import Quote from './components/pages/Quote';
import './styles/main.scss';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/Math-Magician/" element={<Home />} />
        <Route path="/Math-Magician/calculator" element={<Calculator />} />
        <Route path="/Math-Magician/quote" element={<Quote />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </Router>
  );
}

export default App;
