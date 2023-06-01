import React from 'react';

import HamburgerMenuIcon from '@/ui/Icons/HamburgerMenuIcon';
import DarkModeButton from './DarkModeButton';

interface Props {
  changeTheme: () => void;
}

const Nav = ({ changeTheme }: Props) => {
  const handleThemeButtonClick = () => {
    changeTheme();
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
          >
            <HamburgerMenuIcon />
          </label>
          <ul
            tabIndex={0}
            className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>

            <li>
              <a href="">View All</a>
            </li>
          </ul>
        </div>
        {/* Desktop */}
        <div className="hidden lg:block">
          <ul className="px-1 menu menu-horizontal">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
            <li>
              <a>View All</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-2 navbar-center"></div>
      <div className="navbar-end">
        <button className="hidden btn btn-ghost">FAQ</button>
        <button className="hidden btn btn-ghost">VIEW ALL</button>
        <DarkModeButton changeTheme={handleThemeButtonClick} />
      </div>
    </div>
  );
};

export default Nav;
