import { useRef, useEffect, useMemo, useCallback } from 'react';

export default function useIntersectionObserver (isLoading, hasNextPage, observerCallback) {
  const callbackRef = useRef(() => observerCallback());

  const observer = useMemo(() =>
    new IntersectionObserver(
      entries => {
        const isIntersecting = entries.some(entry => entry.isIntersecting);
        if (isIntersecting) {
          callbackRef.current();
        }
      },
    {
      rootMargin: '10%',
    }), []
  );

  useEffect(() => {
    if (isLoading || !hasNextPage) {
      callbackRef.current = () => false;
    } else {
      callbackRef.current = () => observerCallback();
    }
  }, [isLoading, hasNextPage, observerCallback]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => () => observer.disconnect(), []);

  return observer;
};

export const useIntersectionObserverNew = (observerCallback) => {
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        console.log('callback');
        const isIntersecting = entries.some(entry => entry.isIntersecting);
        if (isIntersecting) {
          console.log('intersect!');
          observerCallback();
        }
      },
    {
      rootMargin: '10%',
    });

    // entries.forEach(entry => observer.observe(entry));
    console.log('new observer');

    return () => {
      console.log('disconnect');
      observer.current.disconnect();
    }
  }, [observerCallback]);

  return observer.current;
};
