import styled from 'styled-components';
import {
  DialogContent as MuiDialogContent,
  IconButton as MuiIconButton,
  DialogContentText as MuiDialogContentText,
} from '@material-ui/core';

export const DialogContent = styled(MuiDialogContent)`
  display: flex;
`;

export const IconButton = styled(MuiIconButton)`
  float: right;
`;

export const DialogContentText = styled(MuiDialogContentText)`
  width: 100%;
  text-align: center;
`;
