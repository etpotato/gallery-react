import { useEffect } from 'react';
import fetchPhotos from '../utils/api';

export default async function useFetchPhotos(keyword, page, callback) {
  useEffect(() => {
    (async () => {
      const data = await fetchPhotos(keyword, page);
      callback(data.photos);
    })();
  }, [keyword, page, callback]);

  useEffect(() => {
    (async () => {
      const data = await fetchPhotos();
      callback(data.photos);
    })();
  }, [callback]);
};
