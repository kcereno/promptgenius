'use client';

import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import React, { useState } from 'react';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const [darkMode, setDarkMode] = useState(true);

  let theme = 'night';

  if (!darkMode) {
    theme = 'winter';
  }

  const changeTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div data-theme={theme}>
      <div className="lg:w-[1000px] lg:mx-auto flex flex-col min-h-screen">
        <Nav changeTheme={changeTheme} />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
