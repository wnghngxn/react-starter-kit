import React, { FC } from 'react';
import { openDialog } from 'app/store';
import Button from '@material-ui/core/Button';
import { noop } from 'lodash';
import { UserForm } from './UserForm';

export const UserCreate: FC = () => {
  return (
    <Button
      variant="outlined"
      onClick={(): void => {
        openDialog({
          title: 'create user',
          content: <UserForm />,
          onOk: noop,
          footerable: false,
          noWrapper: true,
        });
      }}
    >
      Create User
    </Button>
  );
};
