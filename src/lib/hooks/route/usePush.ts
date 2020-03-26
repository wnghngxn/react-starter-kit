import { push } from 'connected-react-router';
import { useDispatch } from 'react-redux';
import { useAutoCallback } from 'hooks.macro';

export const usePush = (url?: string) => {
  const dispatch = useDispatch();
  return useAutoCallback((path?: string) => {
    const page = url || path || '';
    dispatch(push(page));
  });
};
