import { useState, useRef, useEffect } from 'react';
import useMatchMedia from '../../hooks/useMatchMedia';
import { separateArray } from '../../utils/helpers';
import APP from '../../config';

import './gallery-grid.scss';

export default function GalleryGrid ({ children, handleObserver }) {
  const [columnCount, setColumnCount] = useState(APP.COLUMN_COUNT.desktop);
  const itemsByColumn = separateArray(children, columnCount);

  useMatchMedia(
    () => setColumnCount(APP.COLUMN_COUNT.mobile),
    () => setColumnCount(APP.COLUMN_COUNT.tablet),
    () => setColumnCount(APP.COLUMN_COUNT.desktop),
  );

  const observer = useRef(new IntersectionObserver(
    (entries, observer) => {
      const isIntersecting = entries.some(entry => entry.isIntersecting);
      if (isIntersecting) {
        handleObserver.current();
        entries.forEach(entry => observer.unobserve(entry.target));
      }
    },
    {
      rootMargin: '10%',
    }
  ));

  useEffect(() => {
    return () => observer.current.disconnect();
  }, []);

  return (
    <ul className="gallery-grid" style={{ gridTemplateColumns: `repeat(${columnCount}, 1fr)` }}>
      { itemsByColumn.map((column, index) => (
        <li key={index + columnCount} className="gallery-grid__column">
          <ul className="gallery-grid__list">
            { column }
          </ul>
          <span ref={(ref) => ref && observer.current.observe(ref)} style={{ fontSize: '0' }}> </span>
        </li>
      )) }
    </ul>
  );
};
