import styled from 'styled-components';
import {
  DialogTitle as MuiDialogTitle,
  DialogContent as MuiDialogContent,
  IconButton as MuiIconButton,
  DialogContentText as MuiDialogContentText,
} from '@material-ui/core';

export const DialogTitle = styled(MuiDialogTitle)`
  && {
    padding: 0 24px;
    & > h2 {
      height: 48px;
      line-height: 48px;
    }
  }
`;

export const DialogContent = styled(MuiDialogContent)`
  /* display: flex; */
`;

export const IconButton = styled(MuiIconButton)`
  float: right;
`;

export const DialogContentText = styled(MuiDialogContentText)`
  /* width: 100%;
  text-align: center;
  padding: 100px 0; */
`;
