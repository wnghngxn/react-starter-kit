import { connect } from 'lib/connect';
import { UserList } from '.';
import { useProps } from './useProps';
// todo
// @ts-ignore
export default connect(useProps)(UserList);
