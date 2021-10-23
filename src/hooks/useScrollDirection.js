import { useEffect, useState } from 'react';
import throttle from '../utils/throttle';


export default function useScrollDirection(lastScrollRef) {
  const [scrollDown, setScrollDown] = useState(false);
  
  const toggleScrollDirection = () => {
    const currentY = window.scrollY;
    const isScrollDown = currentY > 200 ? currentY > lastScrollRef.current : false;
    lastScrollRef.current = currentY;
    setScrollDown(isScrollDown); 
  };
  
  const handleScroll = throttle(toggleScrollDirection, 400);
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return scrollDown;
}