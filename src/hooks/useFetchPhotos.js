import { useState, useEffect } from 'react';
import fetchPhotos from '../utils/api';
import { getArrayOfUnique } from '../utils/helpers';
import APP from '../config';

export default function useFetchPhotos(query, page, setPage) {
  const [isLoading, setIsLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [error, setError] = useState(false);

  const onSuccess = data => {
    setPhotos(photos => getArrayOfUnique([...photos, ...data]));
    setIsLoading(false);
    setHasNextPage(Boolean(data.length));
  };

  const onError = () => setError(true);

  useEffect(() => {
    setPhotos([]);
    setPage(1);
  }, [query, setPage]);

  useEffect(() => {
    if (photos.length >= APP.MAX_PHOTOS_COUNT) return;
    setIsLoading(true);
    console.log('fetching for', 'word', query, 'page', page);
    fetchPhotos(query, page, onSuccess, onError);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, page]);

  return { isLoading, photos, hasNextPage, error, setError };
};
