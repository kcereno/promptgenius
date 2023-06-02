import React from 'react';

import HamburgerMenuIcon from '@/ui/Icons/HamburgerMenuIcon';
import DarkModeButton from './DarkModeButton';
import Link from 'next/link';

interface Props {
  changeTheme: () => void;
}

const Nav = ({ changeTheme }: Props) => {
  const handleThemeButtonClick = () => {
    changeTheme();
  };

  const mobileMenu = (
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
          <Link href="/">Home</Link>
        </li>
        {/* <li>
          <a href="">FAQ</a>
        </li> */}

        <li>
          <Link href="/prompts">View All</Link>
        </li>
      </ul>
    </div>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <Link
          href="/"
          className="hidden text-xl normal-case btn btn-ghost lg:inline-flex"
        >
          <div className="">
            Prompt<span className="text-primary">Genius</span>
          </div>
        </Link>
        {mobileMenu}
      </div>
      <div className="mt-2 navbar-center">
        <div className="hidden lg:block">
          <ul className="px-1 menu menu-horizontal">
            <li>
              <Link href="/prompts">View All</Link>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-end">
        <button className="hidden btn btn-ghost">FAQ</button>
        <button className="hidden btn btn-ghost">VIEW ALL</button>
        <DarkModeButton changeTheme={handleThemeButtonClick} />
      </div>
    </div>
  );
};

export default Nav;
