import React, { FC } from 'react';
import { User } from '../../../resources/user/type';
import { DeactivateButton } from './DeactivateButton';
import { ExpireButton } from './ExpireButton';

export const Action: FC<{
  record: User;
  refresh: (x: number) => void;
}> = ({ record, refresh }) => {
  return (
    <>
      <DeactivateButton record={record} refresh={refresh} />
      {/* | */}
      <ExpireButton record={record} refresh={refresh} />
    </>
  );
};
