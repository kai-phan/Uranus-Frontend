import { createBrowserRouter, RouteObject } from 'react-router-dom';

import ErrorReport from 'src/components/applications/ErrorReport';
import GeneralLayout from 'src/components/applications/GeneralLayout';
import Layout from 'src/components/applications/Layout';

const routers: RouteObject[] = [
  {
    path: '/',
    errorElement: <ErrorReport />,
    element: <GeneralLayout />,
    children: [
      {
        index: true,
        lazy: () => import('src/pages/home'),
      },
      {
        path: 'about',
        element: <Layout />,
        children: [
          {
            index: true,
            lazy: () => import('src/pages/about'),
          },
        ],
      },
      {
        path: 'controlled',
        lazy: () => import('src/pages/controlled'),
      },
      {
        path: 'todos',
        lazy: () => import('src/pages/todos'),
      },
    ],
  },
] satisfies RouteObject[];

export default createBrowserRouter(routers);
