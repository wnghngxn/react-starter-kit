import { lazy } from 'react';
import { RouteConfig } from 'react-router-config';
import { USER } from '../constances';

export const routes: RouteConfig = {
  path: [USER.path],
  exact: true,
  component: lazy(() => import('../components/UserIndex')),
};
