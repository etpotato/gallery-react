import { useState, useCallback } from 'react';
import useMatchMedia from '../../hooks/useMatchMedia';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { separateArray } from '../../utils/helpers';
import APP from '../../config';

import './gallery-grid.scss';

export default function GalleryGrid ({ children, isLoading, hasNextPage, setSearchPage }) {
  const [columnCount, setColumnCount] = useState(APP.COLUMN_COUNT.desktop);
  const itemsByColumn = separateArray(children, columnCount);

  const observer = useIntersectionObserver(isLoading, hasNextPage, () => setSearchPage(page => page +1));

  const entryCallback = useCallback(node => {
    node && observer.observe(node);
  }, [observer]);

  useMatchMedia(
    () => setColumnCount(APP.COLUMN_COUNT.mobile),
    () => setColumnCount(APP.COLUMN_COUNT.tablet),
    () => setColumnCount(APP.COLUMN_COUNT.desktop),
  );

  return (
    <ul
      className="gallery-grid"
      style={{ gridTemplateColumns: `repeat(${columnCount}, 1fr)` }}
    >
      { itemsByColumn.map((column, index) => (
        <li key={index + columnCount} className="gallery-grid__column">
          <ul className="gallery-grid__list">
            { column }
          </ul>
          <span ref={entryCallback} style={{ fontSize: '0' }}> </span>
        </li>
      )) }
    </ul>
  );
};
