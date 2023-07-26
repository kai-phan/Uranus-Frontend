import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import 'src/styles/index.css';

import routerConfig from 'src/router.config';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider
      router={routerConfig}
      fallbackElement={<div>...LOADING SCRIPTS</div>}
    />
  </React.StrictMode>,
);
