import { useState } from 'react';

import useImageOnLoad from '../../hooks/useImageOnLoad';

import './galleryItem.scss'

const ITEM_ROW_HEIGHT = 10;

const getRow = (image) => {
  const height = image.scrollHeight;
  const rowSpan = Math.floor(height / ITEM_ROW_HEIGHT);
  return rowSpan;
};

const GalleryItem = ({ photo, addToCart, removeFromCart, isInCart, openModal }) => {
  const [row, setRow] = useState(15);

  const setImageRef = useImageOnLoad((image) => setRow(getRow(image)));

  const handleLinkClick = (evt) => {
    evt.preventDefault();
    openModal(photo);
  };

  const handleAddToCart = (evt) => {
    evt.preventDefault();
    addToCart(photo);
    evt.target.blur();
  };

  const handleRemoveFromCart = (evt) => {
    evt.preventDefault();
    removeFromCart(photo.id);
    evt.target.blur();
  };

  return (
    <div  
      className={'gallery__item gallery-item' + (isInCart ? ' gallery-item--in-cart' : '')} 
      style={{gridRow: `span ${row}`}}
    >
      <div className='gallery-item__image-wrap'>
        <img className='gallery-item__image' ref={ setImageRef } src={photo.src.large} alt='Photos provided by Pexels'/>
      </div>
      <a className='gallery-item__link' onClick={handleLinkClick} href='/'>
        <span className='visually-hidden'>Open in full size</span>
      </a>
      { isInCart 
        ? (<button onClick={handleRemoveFromCart} className='gallery-item__addtocart gallery-item__addtocart--minus' type='button'>
            <span className='visually-hidden'>Add to cart</span>
          </button>) 
        : (<button onClick={handleAddToCart} className='gallery-item__addtocart' type='button'>
            <span className='visually-hidden'>Add to cart</span>
          </button>)
      }
    </div>
  )
};

export default GalleryItem;