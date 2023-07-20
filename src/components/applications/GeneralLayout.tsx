import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';

export type Props = {
  className?: string;
};

const GeneralLayout: React.FC<Props> = () => {
  const { state } = useNavigation();

  return (
    <React.Fragment>
      <aside className="fixed left-0 top-0 bottom-0 w-[200px] bg-primary-1"></aside>
      <div className="ml-[200px]">
        {state === 'loading' ? (
          <div className="flex items-center justify-center h-screen">
            LOADING IN LOADER
          </div>
        ) : (
          <Outlet />
        )}
      </div>
    </React.Fragment>
  );
};

export default GeneralLayout;
