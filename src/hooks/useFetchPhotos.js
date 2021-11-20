import { useState, useEffect } from 'react';
import fetchPhotos from '../utils/api';
import { getArrayOfUnique } from '../utils/helpers';
import APP from '../config';

export default function useFetchPhotos(keyword, page, setPage) {
  const [isLoading, setIsLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [error, setError] = useState(false);

  const onSuccess = data => {
    setPhotos(photos => getArrayOfUnique([...photos, ...data.photos]));
    setHasNextPage(Boolean(data.next_page));
    setIsLoading(false);
  };

  const onError = () => setError(true);

  useEffect(() => {
    setPhotos([]);
    setPage(1);
  }, [keyword, setPage]);

  useEffect(() => {
    if (photos.length >= APP.MAX_PHOTOS_COUNT) return;
    setIsLoading(true);
    
    fetchPhotos(keyword, page, onSuccess, onError);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword, page]);

  return { isLoading, photos, hasNextPage, error, setError };
};
