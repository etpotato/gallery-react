import { useRef, useEffect } from 'react';

import Navbar from '../Navbar/Navbar';
import GalleryGrid from '../GalleryGrid/GalleryGrid';
import Loader from '../Loader/Loader';

import './gallery.scss';

const Gallery = ({ photos, addToCart, removeFromCart, cart, openModal, searchValue, handleSearch, isLoading, hasNextPage, setSearchPage }) => {
  const loader = useRef();
  const handleObserver = useRef(() => false);

  useEffect(() => {
    const observerCallback = (entries, observer) => {
      if (entries[0].isIntersecting) {
        // console.log('observer works')
        handleObserver.current();
      }
    };
    const observerOptions = {
      rootMargin: '0px',
    };
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    loader.current && observer.observe(loader.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isLoading || !hasNextPage) handleObserver.current = () => false;
    else handleObserver.current = () => setSearchPage(prev => prev + 1);
    // console.log('loading: ' + isLoading, 'hasNextPage: ' + hasNextPage);
  }, [isLoading, hasNextPage, setSearchPage]);
  
  return (
    <main className='page__main gallery pt-4 pb-3'>
      <div className='container container--main-wrap'>
        <h1 className='lead text-center mb-3'>Browse photos and get your favorite!</h1>
        <Navbar searchValue={searchValue} handleSearch={handleSearch}/>
        { (!photos.length && !isLoading) 
          ? <p className='gallery__noresult lead'>No results &#9785;</p>
          : <GalleryGrid photos={photos} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} openModal={openModal}/>}
        <Loader isLoading={isLoading} forwardedRef={loader}/>
      </div>
    </main>
  );
};

export default Gallery;