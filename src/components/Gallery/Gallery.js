import Navbar from '../Navbar/Navbar';
import GalleryGrid from '../GalleryGrid/GalleryGrid';
import GalleryItem from '../GalleryItem/GalleryItem';
import Loader from '../Loader/Loader';

import './gallery.scss';

export default function Gallery ({ photos, addToCart, removeFromCart, cart, openModal, searchValue, setSearchValue, isLoading, hasNextPage, setSearchPage }) {
  return (
    <main className='page__main gallery'>
      <div className='container container--main-wrap'>
        <h1 className='lead text-center mb-3'>Browse photos and get your favorite!</h1>
        <Navbar searchValue={searchValue} setSearchValue={setSearchValue}/>
        { (!photos.length && !isLoading) 
          ? <p className='gallery__noresult lead'>No results &#9785;</p>
          : <GalleryGrid 
              isLoading={isLoading}
              hasNextPage={hasNextPage}
              setSearchPage={setSearchPage}
            >
              { photos.map(photo => {
                const isInCart = cart.some(item => item.id === photo.id);
                return <GalleryItem
                  key={photo.id}
                  photo={photo}
                  addToCart={addToCart}
                  removeFromCart={removeFromCart}
                  isInCart={isInCart}
                  openModal={openModal}
                />
              }) }
            </GalleryGrid>
        }
        <Loader isLoading={isLoading}/>
      </div>
    </main>
  );
}
