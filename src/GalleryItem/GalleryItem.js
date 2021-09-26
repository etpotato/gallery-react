import './galleryItem.scss'

const GalleryItem = ({ photo, openModal }) => {
  const handleLinkClick = (evt) => {
    evt.preventDefault();
    openModal(photo.id);
  };
  return (
    <li className='gallery-item col-6 col-md-3 p-1'>
      <div className='gallery-item__image-wrap'>
        <img className='gallery-item__image rounded' src={photo.src.large} alt='Photos provided by Pexels'/>
      </div>
      <a className='gallery-item__link' onClick={handleLinkClick} href='/'>
        <span className='visually-hidden'>Open in full size</span>
      </a>
      <button className='gallery-item__addtocart' type='button'>
        <span className='visually-hidden'>Add to cart</span>
      </button>
    </li>
  )
};

export default GalleryItem;