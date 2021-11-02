import { useCallback, useRef } from 'react';

export default function useImageOnLoad (callBack) {
  const imageRef = useRef(null);
  const setImageRef = useCallback(image => {
    if (!image) return;
    imageRef.current = image;
    imageRef.current.addEventListener('load', () => {
      callBack(image);
    }, {once: true});
  }, [callBack]);

  return setImageRef;
};
