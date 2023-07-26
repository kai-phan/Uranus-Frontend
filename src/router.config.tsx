import { createBrowserRouter, RouteObject } from 'react-router-dom';

import ErrorReport from 'src/components/ErrorReport';
import GeneralLayout from 'src/components/layouts/GeneralLayout';

const routers: RouteObject[] = [
  {
    path: '/',
    errorElement: <ErrorReport />,
    element: <GeneralLayout />,
    children: [
      {
        index: true,
        lazy: () => import('src/App'),
      },
    ],
  },
];

export default createBrowserRouter(routers);
