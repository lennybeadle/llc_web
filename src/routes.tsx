import React, { Fragment, Suspense } from 'react';
import { Navigate, PathRouteProps, Route, Routes } from 'react-router-dom';
import { LinearProgress } from '@mui/material';
import GuestGuard from './utils/GuestGuard';
import Dashboard from './pages/dashboard';
import Services from './pages/services';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/contact';
import SubBlog from './pages/SubBlog';
import CaseStudies from './pages/CaseStudy';
import ConsentPolicy from './pages/consentPolicy';
import PrivacyPolicy from './pages/privacyPolicy';

export type RouteConfig = PathRouteProps & {
  guard?: any;
  layout?: any;
  routes?: RouteConfig[];
};

export const renderRoutes = (routes: RouteConfig[]) => {
  return (
    <Suspense fallback={<LinearProgress />}>
      <Routes>
        {routes.map((route: RouteConfig, i: number) => {
          const Guard = route.guard || Fragment;
          const Layout = route.layout || Fragment;
          const element = route.element as React.ElementType;

          return route.routes ? (
            route.routes.map((sub: RouteConfig, j: number) => {
              const subElement = sub.element as React.ElementType;
              return (
                <Route
                  key={j}
                  path={sub.path}
                  element={
                    <Guard>
                      <Layout>{subElement}</Layout>
                    </Guard>
                  }
                />
              );
            })
          ) : (
            <Route
              key={i}
              path={route.path}
              element={
                <Guard>
                  <Layout>{element}</Layout>
                </Guard>
              }
            />
          );
        })}
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </Suspense>
  );
};

const routes = [
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/404',
    element: <Navigate to="/dashboard" />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/services',
    element: <Services />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/blog',
    element: <Blog />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/blog/:blogId',
    element: <SubBlog />,
  },
  {
    path: '/case-studies',
    element: <CaseStudies />,
  },
  {
    path: '/consent-policy',
    element: <ConsentPolicy />,
  },
  {
    path: '/privacy-policy',
    element: <PrivacyPolicy />,
  },
  {
    guard: GuestGuard,
    // layout: MainLayout,
    path: '/login',
    element: <Navigate to="/dashboard" />,
  },
];

export const excludeRoutesToAuth = routes
  .filter((x) => x.guard === GuestGuard)
  .map((x) => x.path);

export default routes;
