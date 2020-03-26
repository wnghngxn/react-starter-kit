import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    space: {
      justifyContent: 'space-between',
    },
    brand: {
      color: '#fff',
    },
  }),
);
