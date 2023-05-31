import React from 'react';
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
      <div className="navbar-start"></div>
      <div className="mt-2 navbar-center">
        <DarkModeButton changeTheme={handleThemeButtonClick} />
      </div>
      <div className="navbar-end"></div>
    </div>
  );
};

export default Nav;
