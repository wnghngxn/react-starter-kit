import { Map } from 'immutable';

export type UserState = Map<'search', Map<'query', string>> &
  Map<'refetching', number>;
