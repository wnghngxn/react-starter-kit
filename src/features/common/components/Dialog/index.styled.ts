import styled from 'styled-components';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiIconButton from '@material-ui/core/IconButton';
import MuiDialogContentText from '@material-ui/core/DialogContentText';

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
