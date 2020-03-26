import { defaultsDeep as dp } from 'lodash';

const defaultsDeep = <T>(...args: T[]): T => dp({}, ...args) as T;

export default defaultsDeep;
