import { useEffect, useRef } from 'react';
import { throttle } from '../utils/helpers';


export default function useScrollDirection(onScrollDown, onScrollUp) {
  const lastScrollY = useRef(0);
  
  const toggleScrollDirection = () => {
    const currentY = window.scrollY;
    const isScrollDown = currentY > 200 ? currentY > lastScrollY.current : false;
    lastScrollY.current = currentY;
    isScrollDown ? onScrollDown(currentY) : onScrollUp(currentY);
  };
  
  const handleScroll = throttle(toggleScrollDirection, 400);
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);
}
