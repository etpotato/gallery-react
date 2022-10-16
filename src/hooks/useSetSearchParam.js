import { useCallback } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

const useSetSearchParam = (query) => {
  const { search } = useLocation();
  const history = useHistory();

  const setParam = useCallback((value) => {
    const params = new URLSearchParams(search);
    params.set(query, value);
    history.push({
      pathname: '/search',
      search: params.toString(),
    });
  }, [history, search, query]);

  return setParam;
};

export default useSetSearchParam;
