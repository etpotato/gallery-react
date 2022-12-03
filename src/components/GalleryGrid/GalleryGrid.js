import { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import useMatchMedia from '../../hooks/useMatchMedia';
import { useIntersectionObserverNew } from '../../hooks/useIntersectionObserver';
import { separateArray } from '../../utils/helpers';
import APP from '../../config';

import './gallery-grid.scss';

export default function GalleryGrid ({ children, observerCallback }) {
  const [columnCount, setColumnCount] = useState(APP.COLUMN_COUNT.desktop);
  const entriesRef = useRef([]);
  const observer = useIntersectionObserverNew(observerCallback);
  const itemsByColumn = useMemo(() =>
    separateArray(children, columnCount), [children, columnCount]);

  // const observer = useIntersectionObserver(isLoading, hasNextPage, () => setSearchPage(page => page +1));
  // const observerCb = useCallback(() => console.log('oserver cb'), []);

  useEffect(() => {
    entriesRef.current.forEach(entrie => {
      console.log('observe', entrie && entrie.localName);
      if (entrie && observer) {
        observer.observe(entrie);
      }
    })
  }, [itemsByColumn, entriesRef, observer]);

  const entryCallback = (index) => (node) => {
    console.log('add entry');
    entriesRef.current = entriesRef.current.slice(0, itemsByColumn.length);
    entriesRef.current[index] = node;
  };

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
          <span ref={entryCallback(index)} style={{ fontSize: '0' }}> </span>
        </li>
      )) }
    </ul>
  );
};
