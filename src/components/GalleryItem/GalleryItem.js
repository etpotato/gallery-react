import { useCallback, useRef, useState } from 'react';
import './galleryItem.scss'

const getRow = (image) => {
  const height = image.scrollHeight;
  const rows = Math.floor(height / 10);
  return rows;
};

const useImageRef = (setImageRow) => {
  const imageRef = useRef(null);
  const setImageRef = useCallback(image => {
    if (!image) return;
    imageRef.current = image;
    imageRef.current.addEventListener('load', () => {
      const row = getRow(image);
      setImageRow(row);
    }, {once: true});
  }, [setImageRow]);

  return setImageRef;
}

const GalleryItem = ({ photo, addToCart, removeFromCart, isInCart, openModal }) => {
  const [row, setRow] = useState(15);

  const setImageRef = useImageRef(setRow);

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
      style={{gridRowEnd: `span ${row}`}}
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