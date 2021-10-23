import { useEffect } from 'react';

const STORAGE_NAME = 'photo_store_cart'

export default function useLocalStorage(data, setData) {
  useEffect(() => {
    const dataFromStorage = JSON.parse(localStorage.getItem(STORAGE_NAME));
    setData(dataFromStorage);
  }, [setData]);

  useEffect(() => {
    localStorage.setItem(STORAGE_NAME, JSON.stringify(data));
  }, [data]);
};
