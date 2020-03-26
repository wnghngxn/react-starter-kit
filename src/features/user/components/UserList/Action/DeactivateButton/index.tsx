import React, { FC } from 'react';
import { Button } from '@material-ui/core';
import { openConfirm } from 'app/store';
import { useProps } from './useProps';
import { User } from '../../../../resources/user';
// todo
export const DeactivateButton: FC<{
  record: User;
  refresh: (x: number) => void;
}> = ({ record, refresh }) => {
  const { confirmMessage, deactive, intl } = useProps(refresh);
  return (
    <>
      <Button
        disabled={!record.active}
        color="secondary"
        size="small"
        onClick={() => {
          openConfirm({
            content: confirmMessage,
            onOk: () => {
              deactive({
                data: {
                  active: record.active,
                },
              });
            },
          });
        }}
      >
        {intl({ id: 'noun.deactivate' })}
      </Button>
    </>
  );
};
