import React, { FC, ReactNode } from 'react';
import { Button, Dialog, DialogActions } from '@material-ui/core';

import CloseIcon from '@material-ui/icons/Close';
import { isString } from 'lodash';
import { useIntl } from 'lib/hooks/i18n';
import t from 'tersus-jsx.macro';
import {
  DialogTitle,
  DialogContent,
  IconButton,
  DialogContentText,
} from './index.styled';

const ConfirmDialog: FC<{
  visible: boolean;
  onClose?: () => void;
  onOk?: () => void;
  title?: ReactNode;
  okText?: string;
  cancelText?: string;
  footer?: ReactNode;
  header?: ReactNode;
  footerable?: boolean;
  noWrapper?: boolean;
}> = ({
  visible,
  onClose,
  onOk,
  title,
  children,
  okText,
  cancelText,
  footer,
  header,
  footerable,
  noWrapper,
}) => {
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
      <DialogTitle tj-if={!header} id="dialog-title">
        {title}
        <IconButton aria-label="close" onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogTitle tj-if={header} id="dialog-title">
        {header}
      </DialogTitle>
      <DialogContent tj-if={!noWrapper && isString(children)} dividers>
        <DialogContentText id="dialog-description">
          {children}
        </DialogContentText>
      </DialogContent>
      <DialogContent tj-if={!noWrapper && !isString(children)} dividers>
        {children}
      </DialogContent>
      {noWrapper && children}
      <DialogActions tj-if={footerable && !footer}>
        <Button onClick={onOk}>{okText || intl({ id: 'noun.confirm' })}</Button>
        <Button onClick={onClose}>
          {cancelText || intl({ id: 'noun.cancel' })}
        </Button>
      </DialogActions>
      <DialogActions tj-if={footerable && footer}>{footer}</DialogActions>
    </Dialog>,
  );
};

export default ConfirmDialog;
