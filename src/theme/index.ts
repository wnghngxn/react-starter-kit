import { createMuiTheme } from '@material-ui/core/styles';
import { Theme } from 'styled-system';
import palette from './palette';
import typography from './typography';
import overrides from './overrides';
import fontSizes from './fontSizes';
import space from './space';
import zIndex from './zIndex';
import fontWeights from './fontWeights';
import borders from './borders';

const muiTheme = createMuiTheme({
  palette,
  typography,
  overrides,
  zIndex,
});

export const styledTheme: Theme & { typography: typeof typography } = {
  colors: palette,
  space,
  fontSizes,
  zIndices: {
    ...zIndex,
    medium: 900,
  },
  borders,
  typography,
  fontWeights,
};

export default muiTheme;
