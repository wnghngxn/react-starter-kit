import { isArray } from 'lodash';

export const mapPre = (str: string) => str.replace(/\/$/, '');
export const mapRelativePath = (str: string) => str.replace('./', '');

export const concatPath = (pre: string[] | string, post: string) => {
  if (isArray(pre)) {
    return pre.map(pre => `${mapPre(pre)}/${mapRelativePath(post)}`);
  }
  return `${mapPre(pre)}/${mapRelativePath(post)}`;
};
