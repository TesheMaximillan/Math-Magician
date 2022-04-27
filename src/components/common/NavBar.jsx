import React from 'react';
import { NavLink } from 'react-router-dom';
import Lists from './Lists';

function NavBar() {
  const Links = [
    {
      id: 1,
      name: 'Home',
      path: '/',
    },
    {
      id: 2,
      name: 'Calculator',
      path: '/calculator',
    },
    {
      id: 3,
      name: 'Quote',
      path: '/quote',
    },
  ];
  return (
    <div className="navbar">
      <div className="logo">
        <NavLink to="/" className="logo__link"><h2>Math Magicians</h2></NavLink>
      </div>
      <Lists Links={Links} />
    </div>
  );
}

export default NavBar;
