import React from 'react';
import AppBar from './AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="container">
      <AppBar />
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
