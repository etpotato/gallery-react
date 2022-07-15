import { useRef, useEffect, useMemo } from 'react';

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
