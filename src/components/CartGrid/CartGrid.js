import { useState } from 'react';
import useMatchMedia from '../../hooks/useMatchMedia';
import { chopArray } from '../../utils/helpers';
import APP from '../../config';

import './cart-grid.scss';

export default function CartGrid ({ children }) {
  const [columnCount, setColumnCount] = useState(APP.COLUMN_COUNT.desktop);
  const itemsByColumn = chopArray(children, columnCount);

  useMatchMedia(
    () => setColumnCount(APP.CART_COLUMN_COUNT.mobile),
    () => setColumnCount(APP.CART_COLUMN_COUNT.tablet),
    () => setColumnCount(APP.CART_COLUMN_COUNT.desktop),
  );

  return (
    <ul className="cart-grid" style={{ gridTemplateColumns: `repeat(${columnCount}, 1fr)` }}>
      { itemsByColumn.map((column, index) => (
        <li key={index + columnCount} className="cart-grid__column">
          <ul className="cart-grid__list">
            { column }
          </ul>
        </li>
      )) }
    </ul>
  );
};
