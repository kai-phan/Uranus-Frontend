import { createBrowserRouter, RouteObject } from 'react-router-dom';

const routers: RouteObject[] = [
  {
    path: '/',
    lazy: () => import('src/App'),
  },
];

export default createBrowserRouter(routers);
