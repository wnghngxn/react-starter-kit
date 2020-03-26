import { Map } from 'immutable';
import { Locale } from '../type';
import { IntlState } from './type';

const initialState: IntlState = Map({
  locale: process.env.REACT_APP_LOCALE as Locale,
}) as IntlState;

export const intl = {
  state: initialState,
  reducers: {
    setLocale: (state: IntlState, payload: Locale) =>
      state.set('locale', payload),
  },
  effects: () => ({}),
};

export default intl;
