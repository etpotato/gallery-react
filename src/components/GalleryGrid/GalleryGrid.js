import { useState, useRef, useEffect } from 'react';
import useMatchMedia from '../../hooks/useMatchMedia';
import { separateArray } from '../../utils/helpers';
import APP from '../../config';

import './gallery-grid.scss';

export default function GalleryGrid ({ children, handleObserver }) {
  const [columnCount, setColumnCount] = useState(APP.COLUMN_COUNT.desktop);
  const itemsByColumn = separateArray(children, columnCount);
  const lists = useRef([]);

  useMatchMedia(
    () => setColumnCount(APP.COLUMN_COUNT.mobile),
    () => setColumnCount(APP.COLUMN_COUNT.tablet),
    () => setColumnCount(APP.COLUMN_COUNT.desktop),
  );
  
  useEffect(() => {
    const observerCallback = (entries) => {
      const isIntersecting = entries.some(entry => entry.isIntersecting);
      if (isIntersecting) {
        console.log('inters');
        handleObserver.current();
      }
    };
    const observerOptions = {
      rootMargin: '10%',
    };
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    lists.current.length && lists.current.forEach(item => observer.observe(item));
    
    return () => observer.disconnect();
  }, []);

  return (
    <ul className="gallery-grid" style={{ gridTemplateColumns: `repeat(${columnCount}, 1fr)` }}>
      { itemsByColumn.map((column, index) => (
        <li key={index + columnCount} className="gallery-grid__column">
          <ul className="gallery-grid__list">
            { column }
            <li key={'observer' + index} ref={(ref) => lists.current.push(ref)}> </li>
          </ul>
        </li>
      )) }
    </ul>
  );
};
