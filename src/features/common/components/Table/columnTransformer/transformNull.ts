import { ReactNode } from 'react';
import { produce } from 'immer';
import { Column } from '../types';

export const transformNull = (column: Column) => {
  if (!column.null) return column;
  return produce(column, draftState => {
    if (!draftState.options) {
      // eslint-disable-next-line no-param-reassign
      draftState.options = {};
    }
    // eslint-disable-next-line no-param-reassign
    draftState.options.customBodyRender = (value: ReactNode) => {
      return value || 'NULL';
    };
    // eslint-disable-next-line no-param-reassign
    delete draftState.null;
  });
};
