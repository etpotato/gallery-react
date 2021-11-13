import { useRef, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import GalleryGrid from '../GalleryGrid/GalleryGrid';
import GalleryItem from '../GalleryItem/GalleryItem';
import Loader from '../Loader/Loader';
import ScrollUpButton from '../ScrollUpButton/ScrollUpButton';

import './gallery.scss';

export default function Gallery ({ photos, addToCart, removeFromCart, cart, openModal, searchValue, setSearchValue, isLoading, hasNextPage, setSearchPage }) {
  const loader = useRef([]);
  const handleObserver = useRef(() => false);

  // useEffect(() => {
  //   const observerCallback = (entries) => {
  //     if (entries[0].isIntersecting) {
  //       handleObserver.current();
  //     }
  //     // const isIntersecting = entries.some(entry => entry.isIntersecting);
  //     // isIntersecting && handleObserver.current();
  //   };
  //   const observerOptions = {
  //     rootMargin: '10%',
  //   };
  //   const observer = new IntersectionObserver(observerCallback, observerOptions);
  //   loader.current && observer.observe(loader.current);
    
  //   return () => observer.disconnect();
  // }, []);
  
  useEffect(() => {
    if (isLoading || !hasNextPage) handleObserver.current = () => false;
    else handleObserver.current = () => {
      setSearchPage(prev => prev + 1);
    };
  }, [isLoading, hasNextPage, setSearchPage]);

  return (
    <main className='page__main gallery pt-4 pb-3'>
      <div className='container container--main-wrap'>
        <h1 className='lead text-center mb-3'>Browse photos and get your favorite!</h1>
        <Navbar searchValue={searchValue} setSearchValue={setSearchValue}/>
        { (!photos.length && !isLoading) 
          ? <p className='gallery__noresult lead'>No results &#9785;</p>
          : <GalleryGrid handleObserver={handleObserver}>
              { photos.map(photo => {
                const isInCart = cart.some((item) => item.id === photo.id);
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
        <ScrollUpButton />
        <Loader isLoading={isLoading} forwardedRef={loader}/>
      </div>
    </main>
  );
}
