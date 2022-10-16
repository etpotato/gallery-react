import { useEffect } from 'react';
import APP from '../config';

export default function useLocalStorage(data, setData) {
  useEffect(() => {
    const dataFromStorage = JSON.parse(localStorage.getItem(APP.LOCAL_STORAGE_NAME));
    dataFromStorage ?? setData(dataFromStorage);
  }, [setData]);

  useEffect(() => {
    localStorage.setItem(APP.LOCAL_STORAGE_NAME, JSON.stringify(data));
  }, [data]);
};
