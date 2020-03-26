import React, { FC } from 'react';
import { Button } from '@material-ui/core';
import { openDialog } from 'app/store';
import { noop } from 'lodash';
import { useProps } from './useProps';
import { ExpireForm } from './ExpireForm';
import { User } from '../../../../resources/user';
// todo
export const ExpireButton: FC<{
  record: User;
  refresh: (x: number) => void;
}> = ({ record }) => {
  const { intl } = useProps();
  return (
    <>
      <Button
        color="secondary"
        size="small"
        onClick={() => {
          openDialog({
            title: 'update expire',
            content: <ExpireForm record={record} />,
            onOk: noop,
            footerable: false,
            noWrapper: true,
          });
        }}
      >
        {intl({ id: 'noun.expire' })}
      </Button>
    </>
  );
};
