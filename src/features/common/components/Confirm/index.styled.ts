import styled from 'styled-components';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiIconButton from '@material-ui/core/IconButton';
import MuiDialogContentText from '@material-ui/core/DialogContentText';

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
