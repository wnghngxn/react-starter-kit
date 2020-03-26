import { RouteConfig } from 'react-router-config';
import { loginRoute } from './login';

export * from './login';
export * from './register';

export const routes: RouteConfig[] = [loginRoute];
