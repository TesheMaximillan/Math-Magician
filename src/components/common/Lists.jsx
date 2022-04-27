import React from 'react';
import { NavLink } from 'react-router-dom';

function Lists(pros) {
  const { Links } = pros;
  return (
    <ul className="list-group">
      {Links.map((link) => (
        <li className="list-item" key={link.id}>
          <NavLink to={link.path}>{link.name}</NavLink>
        </li>
      ))}
    </ul>
  );
}

export default Lists;
