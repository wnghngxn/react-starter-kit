import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { createEpicMiddleware } from 'redux-observable';

export const epicMiddleware = createEpicMiddleware();
export const history = createBrowserHistory();

const middlewares = [epicMiddleware, routerMiddleware(history)];
if (process.env.NODE_ENV !== 'production') {
  // todo
  const { createLogger } = require('redux-logger');
  middlewares.push(createLogger());
}

export { middlewares };
