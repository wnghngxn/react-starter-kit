import React, { memo, ReactElement, PropsWithChildren, ReactNode } from 'react';
import MUIDataTable, {
  MUIDataTableOptions,
  MUIDataTableMeta,
  MUIDataTableTextLabels,
} from 'mui-datatables';
import { defaultsDeep } from 'lodash';
import { produce } from 'immer';
import { useAutoMemo } from 'hooks.macro';
import { useI18n } from 'lib/hooks/i18n';
import { transformTime } from './columnTransformer/transformTime';
import { transformNull } from './columnTransformer/transformNull';
import { transformBoolean } from './columnTransformer/transformBoolean';
import { Column } from './types';
import locales from './locales';

export * from './types';
// todo
export const Table = memo(
  <T extends object>({
    title,
    data,
    columns,
    options = {},
    action: actionRender,
  }: PropsWithChildren<{
    title?: string;
    data: T[];
    columns: Column[];
    options?: MUIDataTableOptions;
    action?: (row: T, rows: T[]) => ReactElement;
  }>): ReactElement => {
    const { textLabels, actionLabel } = useI18n(locales);
    const defaultOptions:
      | MUIDataTableOptions
      | {
          textLabels: Partial<MUIDataTableTextLabels>;
        } = useAutoMemo({
      filterType: 'checkbox',
      selectableRows: 'none',
      print: false,
      filter: false,
      sort: false,
      download: false,
      viewColumns: false,
      search: false,
      textLabels,
    });
    const mergedOptions = useAutoMemo(
      produce(options, draftState => {
        defaultsDeep(draftState, defaultOptions);
      }),
    );
    const transformedColumns = useAutoMemo(() => {
      // eslint-disable-next-line max-nested-callbacks
      const transformedColumns = columns.map(column => {
        if (column.boolean) {
          return transformBoolean(column);
        }
        if (column.null) {
          return transformNull(column);
        }
        if (column.time) {
          return transformTime(column);
        }
        return column;
      });
      if (!actionRender) return transformedColumns;
      const actionColumn = [
        {
          name: '',
          label: actionLabel,
          options: {
            customBodyRender: (
              value: ReactNode,
              tableMeta: MUIDataTableMeta,
            ) => {
              const record = data[tableMeta.rowIndex];
              return actionRender(record, data);
            },
            filter: false,
          },
        },
      ];
      return transformedColumns.concat(actionColumn);
    });
    return (
      <MUIDataTable
        title={title}
        data={data}
        columns={transformedColumns}
        options={mergedOptions}
      />
    );
  },
);
