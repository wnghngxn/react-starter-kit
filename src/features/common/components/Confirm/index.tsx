import React, { FC } from 'react';
import { Button, Dialog, DialogActions } from '@material-ui/core';
import { isString } from 'lodash';
import { useIntl } from 'lib/hooks/i18n';
import t from 'tersus-jsx.macro';
import { DialogContent, DialogContentText } from './index.styled';

const Confirm: FC<{
  visible: boolean;
  onClose?: () => void;
  onOk?: () => void;
  okText?: string;
  cancelText?: string;
}> = ({ visible, onClose, onOk, children, okText, cancelText }) => {
  const intl = useIntl();
  return t(
    <Dialog
      open={visible}
      onClose={onClose}
      disableBackdropClick
      disableEscapeKeyDown
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
    >
      <DialogContent tj-if={isString(children)}>
        <DialogContentText id="dialog-description">
          {children}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onOk}>{okText || intl({ id: 'noun.confirm' })}</Button>
        <Button onClick={onClose}>
          {cancelText || intl({ id: 'noun.cancel' })}
        </Button>
      </DialogActions>
    </Dialog>,
  );
};

export default Confirm;
