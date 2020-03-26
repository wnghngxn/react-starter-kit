import { useDispatch } from 'react-redux';
import { debounce } from 'lodash';
import { useAutoMemo } from 'hooks.macro';
import { UserDispatch } from '../../model';

const mapDispatch = (dispatch: UserDispatch) => ({
  setQuery: (str: string) => {
    dispatch.user.setQuery(str);
  },
});

export const useProps = () => {
  const dispath: UserDispatch = useDispatch();
  const { setQuery } = mapDispatch(dispath);
  const debouncedSetQuery = useAutoMemo(debounce(setQuery, 600));
  return {
    setQuery: debouncedSetQuery,
  };
};
