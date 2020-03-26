import React, { FC, ReactNode, MouseEvent } from 'react';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import { amber, green } from '@material-ui/core/colors';
import {
  IconButton,
  SnackbarProps,
  Snackbar as MuiSnackbar,
  SnackbarContent,
} from '@material-ui/core';

import WarningIcon from '@material-ui/icons/Warning';
import { makeStyles } from '@material-ui/core/styles';
import { SNACKBAR_VARIANT } from 'features/feedback/constances';
// todo
const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

const useStyles = makeStyles(theme => ({
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.main,
  },
  warning: {
    backgroundColor: amber[700],
  },
  icon: {
    fontSize: 20,
    color: '#fff',
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    display: 'flex',
    alignItems: 'center',
    color: '#fff',
  },
}));

const MySnackbarContentWrapper: FC<{
  variant: SNACKBAR_VARIANT;
  message: ReactNode;
  onClose?: (e: MouseEvent<HTMLElement>, reason: string) => void;
}> = props => {
  const classes = useStyles();
  const { message, onClose, variant = SNACKBAR_VARIANT.info } = props;
  const Icon = variantIcon[variant];
  return (
    <SnackbarContent
      className={classes[variant]}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={`${classes.icon} ${classes.iconVariant}`} />
          {message}
        </span>
      }
      action={[
        <IconButton
          key="close"
          aria-label="close"
          color="inherit"
          onClick={e => {
            if (onClose) {
              onClose(e, '');
            }
          }}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>,
      ]}
    />
  );
};
// todo
const Snackbar: FC<SnackbarProps & {
  variant: SNACKBAR_VARIANT;
  onClose?: (e: Event) => void;
}> = ({
  open,
  onClose,
  variant,
  message,
  autoHideDuration = 3000,
  anchorOrigin = {
    vertical: 'top',
    horizontal: 'center',
  },
}) => {
  return (
    <MuiSnackbar
      anchorOrigin={anchorOrigin}
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
    >
      <MySnackbarContentWrapper
        // @ts-ignore
        onClose={onClose}
        variant={variant}
        message={message}
      />
    </MuiSnackbar>
  );
};

export default Snackbar;
