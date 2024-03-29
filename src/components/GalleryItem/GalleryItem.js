import { useState } from 'react';
import './galleryItem.scss'

export default function GalleryItem ({ photo, addToCart, removeFromCart, isInCart, openModal }) {
  const [loadingClass, setLoadingClass] = useState(' loading');
  const inCartClass = isInCart ? ' in-cart' : '';

  const handleLinkClick = evt => {
    evt.preventDefault();
    openModal(photo);
  };

  const handleAddToCart = evt => {
    evt.preventDefault();
    addToCart(photo);
    evt.target.blur();
  };

  const handleRemoveFromCart = evt => {
    evt.preventDefault();
    removeFromCart(photo.id);
    evt.target.blur();
  };

  return (
    <li
      className={'gallery-grid__item gallery-item' + loadingClass + inCartClass}
    >
      <div className='gallery-item__image-wrap'>
        <img
          onLoad={() => setLoadingClass('')}
          className='gallery-item__image'
          src={photo.urls.regular}
          alt='Photos provided by Pexels'
        />
      </div>
      <a className='gallery-item__link' onClick={handleLinkClick} href='/'>
        <span className='visually-hidden'>Open in full size</span>
      </a>
      {isInCart
      ? ( <button
            onClick={handleRemoveFromCart}
            className='gallery-item__addtocart gallery-item__addtocart--minus'
            type='button'
          >
            <span className='visually-hidden'>Add to cart</span>
          </button>
        )
      : ( <button
            onClick={handleAddToCart}
            className='gallery-item__addtocart'
            type='button'
          >
            <span className='visually-hidden'>Add to cart</span>
          </button>
        )
      }
    </li>
  );
};
