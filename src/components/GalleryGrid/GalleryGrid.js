import StackGrid from 'react-stack-grid';

import GalleryItem from '../GalleryItem/GalleryItem';

const BREAKPOINTS = {
  tablet: 768,
  desktop: 1200,
};

export default function GalleryGrid({cart, addToCart, removeFromCart, openModal, photos}) {
  const windowWidth = window.innerWidth;
  const getWidth = () => {
    if (windowWidth > BREAKPOINTS.desktop) return '25%';
    if (windowWidth > BREAKPOINTS.tablet) return '33.33%';
    return '50%';
  };
  return (
    <div className='gallery__list mb-3'>
      <StackGrid
        columnWidth={getWidth()}
        gutterWidth={8}
        gutterHeight={8}
        monitorImagesLoaded={true}
      >
        {photos.map(photo => {
          const isInCart = cart.some(cartPhoto => cartPhoto.id === photo.id);
          return <GalleryItem photo={photo} isInCart={isInCart} addToCart={addToCart} removeFromCart={removeFromCart} key={photo.id} openModal={openModal}/>;
        })}
      </StackGrid>
    </div>
  );
};
