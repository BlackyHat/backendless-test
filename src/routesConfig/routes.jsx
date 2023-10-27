import { lazy } from 'react';
import tabs from '../assets/tabs.json';
import { Navigate } from 'react-router-dom';

import Layout from '../components/Layout';
const ErrorPage = lazy(() => import('../pages/error-page'));
const NotFoundPage = lazy(() => import('../pages/not-found-page'));

const tabsRoutes = tabs
  .sort((a, b) => a.order - b.order)
  .map((tab) => {
    const TabComponent = lazy(() => import(`../pages/${tab.path}`)); // WORKING

    return {
      path: `/${tab.id}`,
      element: <TabComponent title={tab.title} />,
      errorElement: <ErrorPage />,
    };
  });

export const routes = [
  {
    element: <Layout />,
    children: [
      ...tabsRoutes,
      {
        path: '/',
        element: <Navigate to={tabsRoutes[0].path} />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
];
