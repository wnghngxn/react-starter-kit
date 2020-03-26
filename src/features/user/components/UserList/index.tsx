import React, { FC, Dispatch, SetStateAction } from 'react';
import { Table } from 'features/common/components/Table';
import { useAutoCallback } from 'hooks.macro';
import { Button, Box } from '@material-ui/core';
import { Pagination } from 'lib/hooks/pagination';
import { User, UserColumns } from '../../resources/user';
import { Action } from './Action';
// todo
export const UserList: FC<{
  pagination: Pagination;
  columns: ({
    name: UserColumns;
    boolean?: boolean;
  } & {
    name: UserColumns;
    null?: boolean;
  } & {
    name: UserColumns;
    time?: boolean;
  } & {
    name: UserColumns;
  } & {
    name: UserColumns;
    label?: string;
  })[];
  refresh: Dispatch<SetStateAction<number>>;
  list: User[];
}> = ({ list, pagination, columns, refresh }) => {
  const actionRender: unknown = useAutoCallback((record: User) => {
    return <Action record={record} refresh={refresh} />;
  });
  return (
    <Table
      data={list}
      action={actionRender as undefined}
      columns={columns}
      options={{
        rowsPerPageOptions: [pagination.rowsPerPage],
        customFooter: () => {
          return (
            <tfoot>
              <Box component="tr" display="flex" justifyContent="flex-end">
                <Button
                  component="th"
                  disabled={pagination.pageNum === 0}
                  onClick={() => {
                    pagination.setPageNum(pagination.pageNum - 1);
                  }}
                >
                  prev
                </Button>
                <Button
                  component="th"
                  onClick={() => {
                    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
                    pagination.setPageNum(pagination.pageNum + 1);
                  }}
                >
                  next
                </Button>
              </Box>
            </tfoot>
          );
        },
      }}
    />
  );
};
