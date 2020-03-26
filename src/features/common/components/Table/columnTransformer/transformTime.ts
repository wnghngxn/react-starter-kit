import { produce } from 'immer';
import { format } from 'date-fns';
import { formater } from 'constances/time';
import { Column } from '../types';

export const transformTime = (column: Column) => {
  if (!column.time) return column;
  return produce(column, draftState => {
    if (!draftState.options) {
      // eslint-disable-next-line no-param-reassign
      draftState.options = {};
    }
    // eslint-disable-next-line no-param-reassign
    draftState.options.customBodyRender = (value?: number) => {
      const magicNumber = 1000;
      return value ? format(value * magicNumber, formater) : 'NULL';
    };
    // eslint-disable-next-line no-param-reassign
    delete draftState.time;
  });
};
