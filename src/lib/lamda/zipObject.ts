import { zipObject as lodashZipObject, map, Dictionary } from 'lodash';

const zipObject = <T>(keys: string[], matrix: T[][]): Dictionary<T>[] =>
  map(matrix, values => lodashZipObject(keys, values));

export default zipObject;
