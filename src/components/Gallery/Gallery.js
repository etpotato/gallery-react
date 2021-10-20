import Navbar from '../Navbar/Navbar';
import GalleryItem from '../GalleryItem/GalleryItem';
import './gallery.scss';

const Gallery = ({ photos, addToCart, removeFromCart, cart, openModal, tags, setTag }) => {
  return (
    <div className='container container--main-wrap'>
      <main className='gallery pt-4 pb-5'>
        <h1 className='lead text-center mb-3'>Browse photos and pick your favorite!</h1>
        <Navbar tags={tags} setTag={setTag}/>
        <ul className='gallery__list row mb-2'>
          {photos.map(photo => {
            const isInCart = cart.some(cartPhoto => cartPhoto.id === photo.id);
            return <GalleryItem photo={photo} isInCart={isInCart} addToCart={addToCart} removeFromCart={removeFromCart} key={photo.id} openModal={openModal}/>;
          })}
        </ul>
      </main>
    </div>
  );
};

export default Gallery;