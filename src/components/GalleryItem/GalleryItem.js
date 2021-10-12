import './galleryItem.scss'

const GalleryItem = ({ photo, addToCart, removeFromCart, isInCart, openModal }) => {
  const handleLinkClick = (evt) => {
    evt.preventDefault();
    openModal(photo.id);
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
    <li className={'gallery-item col-6 col-md-3 p-1' + (isInCart ? ' gallery-item--in-cart' : '')}>
      <div className='gallery-item__image-wrap rounded'>
        <img className='gallery-item__image' src={photo.src.large} alt='Photos provided by Pexels' loading="lazy"/>
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
      
    </li>
  )
};

export default GalleryItem;