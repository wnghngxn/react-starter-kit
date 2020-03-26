import {
  loginRoute,
  registerRoute,
  routes as publicRoute,
} from 'features/account/routes';
import { routes as userRoute } from 'features/user';
import { Main } from 'features/common/components/layout/Main';
import { PageUrl } from 'features/common/constances';
import { RouteConfig } from 'react-router-config';
import { notFoundRoute } from './404';
import { redirectTo404Route } from './redirectTo404Route';
import { redirectToUser } from './redirectToUser';

export const accountRoutes = [loginRoute, registerRoute];

export const routes: RouteConfig[] = [
  {
    path: PageUrl.root,
    routes: [userRoute].concat(publicRoute),
    component: Main,
  },
];

export const mainRoutes = [
  notFoundRoute,
  userRoute,
  redirectToUser,
  redirectTo404Route,
];
