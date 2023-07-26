import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '../../Footer';
import Header from '../../Header';

export type Props = {
  className?: string;
};

const GeneralLayout: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
};

export default GeneralLayout;
