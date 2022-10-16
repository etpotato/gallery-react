import { useLocation } from 'react-router-dom';
import { useMemo } from 'react';

const useSearchParam = (query, fallbackValue) => {
  const { search } = useLocation();

  const param = useMemo(() => {
    const searchParams = new URLSearchParams(search);
    return searchParams.get(query);
  }, [search, query]);

  return param ?? fallbackValue;
};

export default useSearchParam;
