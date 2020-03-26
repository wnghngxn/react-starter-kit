import { lazy } from 'react';
import { RouteConfig } from 'react-router-config';
import { AccountPageUrl } from '../constances';

export const loginRoute: RouteConfig = {
  path: AccountPageUrl.login,
  exact: true,
  component: lazy(() => import('../components/Login')),
};
