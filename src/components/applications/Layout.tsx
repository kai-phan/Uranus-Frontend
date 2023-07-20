import React from 'react';
import { Outlet } from 'react-router-dom';

export type Props = {
  className?: string;
};

const Layout: React.FC<Props> = () => {
  return (
    <React.Fragment>
      <div className="bg-primary-1">Header</div>
      <Outlet />
    </React.Fragment>
  );
};

export default Layout;
