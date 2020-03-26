import { useLocation } from 'react-router-dom';
import qs from 'query-string';
import { useAutoMemo } from 'hooks.macro';

const useSearch = () => {
  const location = useLocation();
  return useAutoMemo(qs.parse(location.search));
};

export default useSearch;
