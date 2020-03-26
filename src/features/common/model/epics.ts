import { filter, mergeMap, withLatestFrom } from 'rxjs/operators';
import {
  ofType,
  combineEpics,
  ActionsObservable,
  StateObservable,
} from 'redux-observable';
import { RPCAction, PurgeAction } from 'rest-hooks';
import { RootState } from 'app/store';

const responseEpic = (
  action$: ActionsObservable<RPCAction | PurgeAction>,
  state$: StateObservable<RootState>,
) =>
  action$.pipe(
    ofType('rest-hooks/rpc', 'rest-hooks/purge'),
    withLatestFrom(state$),
    filter(() => {
      return false;
    }),
    mergeMap(([action]) => {
      return [action];
    }),
  );

const coreEpic = combineEpics(responseEpic);

export default coreEpic;
