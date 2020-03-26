import { connectRouter } from 'connected-react-router';
import { history } from '../middlewares';

export const reducers = {
  router: connectRouter(history),
};
