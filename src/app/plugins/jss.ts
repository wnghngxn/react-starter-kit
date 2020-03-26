import { create } from 'jss';
import { jssPreset } from '@material-ui/core/styles';
import rtl from 'jss-rtl';
import jpt from 'jss-plugin-template';

const jss = create({
  plugins: [...jssPreset().plugins, rtl(), jpt()],
});

export default jss;
