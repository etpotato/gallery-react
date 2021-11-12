import GalleryItem from '../GalleryItem/GalleryItem';

import './gallery-column.scss';

export default function GalleryColumn ({ photos, cart, addToCart, removeFromCart, openModal }) {
  return (
    <li className="gallery__column gallery-column">
      <ul className="gallery-column__list">
        {photos.map(photo => {
          const isInCart = cart.some(cartPhoto => cartPhoto.id === photo.id);
          return <GalleryItem
            key={photo.id}
            photo={photo}
            isInCart={isInCart}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            openModal={openModal}
          />;
        })}
      </ul>
    </li>
  );
};
