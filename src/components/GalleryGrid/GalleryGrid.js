import { useState } from 'react';
import useMatchMedia from '../../hooks/useMatchMedia';
import { separateArray, chopArray } from '../../utils/helpers';
import APP from '../../config';

import './gallery-grid.scss';

export default function GalleryGrid ({ children, isCart }) {
  const [columnCount, setColumnCount] = useState(APP.COLUMN_COUNT.desktop);
  const itemsByColumn = isCart ? chopArray(children, columnCount) : separateArray(children, columnCount);

  const columnByDevice = {
    mobile: isCart ? APP.CART_COLUMN_COUNT.mobile : APP.COLUMN_COUNT.mobile,
    tablet: isCart ? APP.CART_COLUMN_COUNT.tablet : APP.COLUMN_COUNT.tablet,
    desktop: isCart ? APP.CART_COLUMN_COUNT.desktop : APP.COLUMN_COUNT.desktop,
  }

  useMatchMedia(
    () => setColumnCount(columnByDevice.mobile),
    () => setColumnCount(columnByDevice.tablet),
    () => setColumnCount(columnByDevice.desktop),
  );

  return (
    <ul className="gallery-grid" style={{ gridTemplateColumns: `repeat(${columnCount}, 1fr)` }}>
      { itemsByColumn.map((column, index) => (
        <li key={index + columnCount} className="gallery-grid__column">
          <ul className="gallery-grid__list">
            { column }
          </ul>
        </li>
      )) }
    </ul>
  );
};
