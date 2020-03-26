import React from 'react';
import { produce } from 'immer';
import Check from '@material-ui/icons/Check';
import Clear from '@material-ui/icons/Clear';
import { Column } from '../types';

export const transformBoolean = (column: Column) => {
  if (!column.boolean) return column;
  return produce(column, draftState => {
    if (!draftState.options) {
      // eslint-disable-next-line no-param-reassign
      draftState.options = {};
    }
    // eslint-disable-next-line no-param-reassign
    draftState.options.customBodyRender = (value?: boolean) => {
      return value ? <Check /> : <Clear />;
    };
    // eslint-disable-next-line no-param-reassign
    delete draftState.boolean;
  });
};
