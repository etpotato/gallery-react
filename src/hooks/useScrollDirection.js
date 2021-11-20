import { useEffect, useRef } from 'react';
import { throttle } from '../utils/helpers';
import APP from '../config';

export default function useScrollDirection( onScrollDown, onScrollUp ) {
  const lastScrollY = useRef(0);
  
  useEffect(() => {
    const toggleScrollDirection = () => {
      const currentY = window.scrollY;
      const isScrollDown = currentY > APP.SCROLL_SENSITIVITY ? currentY > lastScrollY.current : false;
      lastScrollY.current = currentY;
      isScrollDown ? onScrollDown(currentY) : onScrollUp(currentY);
    };
    
    const handleScroll = throttle(toggleScrollDirection, 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
