import React from 'react';
import { NavLink } from 'react-router-dom';
import tabs from '../assets/tabs.json';

const AppBar = () => {
  return (
    <header>
      <ul className="navList">
        {tabs
          .sort((a, b) => a.order - b.order)
          .map((tab) => (
            <li key={tab.id}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'active link' : 'link'
                }
                to={tab.id}
              >
                {tab.title}
              </NavLink>
            </li>
          ))}
      </ul>
    </header>
  );
};

export default AppBar;
