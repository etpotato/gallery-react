import { useState, useEffect } from 'react';

import fetchPhotos from '../utils/api';
import { getArrayOfUnique } from '../utils/helpers';

export default function useFetchPhotos(keyword, page, setPage) {
  const [isLoading, setIsLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [hasNextPage, setHasNextPage] = useState(true);

  useEffect(() => {
    setPhotos([]);
    setPage(1);
  }, [keyword, setPage]);

  useEffect(() => {
    setIsLoading(true);
    const onSuccess = (data) => {
      setPhotos(photos => getArrayOfUnique([...photos, ...data.photos]));
      setHasNextPage(Boolean(data.next_page));
      setIsLoading(false);
    };
    fetchPhotos(keyword, page, onSuccess);
  }, [keyword, page]);

  return { isLoading, photos, hasNextPage };
};
