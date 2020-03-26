import { Map } from 'immutable';
import { RematchDispatch } from 'app/store/rematch/type';
import { UserState } from './type';
// todo
const initialState: UserState = Map({
  search: Map({
    query: '',
  }),
  refetching: 0,
}) as UserState;

export const model = {
  state: initialState,
  reducers: {
    setRefetching: (state: UserState, payload: number) =>
      state.set('refetching', payload),
    setQuery: (state: UserState, payload: string) =>
      state.setIn(['search', 'query'], payload),
  },
  effects: () => ({}),
};

export type UserDispatch = {
  user: RematchDispatch<typeof model>;
};
