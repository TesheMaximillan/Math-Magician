import React from 'react';
import { NavLink } from 'react-router-dom';
import Lists from '../common/Lists';

function NavBar() {
  const Links = [
    {
      id: 1,
      name: 'Home',
      path: '/Math-Magician/',
    },
    {
      id: 2,
      name: 'Calculator',
      path: '/Math-Magician/calculator',
    },
    {
      id: 3,
      name: 'Quote',
      path: '/Math-Magician/quote',
    },
  ];
  return (
    <div className="navbar">
      <div className="logo">
        <NavLink to="/Math-Magician/" className="logo__link"><h2>Math Magicians</h2></NavLink>
      </div>
      <Lists Links={Links} />
    </div>
  );
}

export default NavBar;
