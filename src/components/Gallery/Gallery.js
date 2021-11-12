import { useState, useRef, useEffect } from 'react';
import useMatchMedia from '../../hooks/useMatchMedia';
import { separateArray } from '../../utils/helpers';
import APP from '../../config';

import Navbar from '../Navbar/Navbar';
import GalleryColumn from '../GalleryColumn/GalleryColumn';
import Loader from '../Loader/Loader';

import './gallery.scss';

const Gallery = ({ photos, addToCart, removeFromCart, cart, openModal, searchValue, setSearchValue, isLoading, hasNextPage, setSearchPage }) => {
  const [columnCount, setColumnCount] = useState(APP.COLUMN_COUNT.desktop);
  const loader = useRef();
  const handleObserver = useRef(() => false);

  useMatchMedia(
    () => setColumnCount(APP.COLUMN_COUNT.mobile),
    () => setColumnCount(APP.COLUMN_COUNT.tablet),
    () => setColumnCount(APP.COLUMN_COUNT.desktop),
  );

  useEffect(() => {
    const observerCallback = (entries) => {
      if (entries[0].isIntersecting) {
        handleObserver.current();
      }
    };
    const observerOptions = {
      rootMargin: '10%',
    };
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    loader.current && observer.observe(loader.current);
    
    return () => observer.disconnect();
  }, []);
  
  useEffect(() => {
    if (isLoading || !hasNextPage) handleObserver.current = () => false;
    else handleObserver.current = () => {
      setSearchPage(prev => prev + 1);
    };
  }, [isLoading, hasNextPage, setSearchPage]);

  const photosByColumn = separateArray(photos, columnCount);

  return (
    <main className='page__main gallery pt-4 pb-3'>
      <div className='container container--main-wrap'>
        <h1 className='lead text-center mb-3'>Browse photos and get your favorite!</h1>
        <Navbar searchValue={searchValue} setSearchValue={setSearchValue}/>
        { (!photos.length && !isLoading) 
          ? <p className='gallery__noresult lead'>No results &#9785;</p>
          : <ul className='gallery__list' style={{ gridTemplateColumns: `repeat(${columnCount}, 1fr)` }}>
              { photosByColumn.map((column, index) => <GalleryColumn
                                              key={index + columnCount}
                                              photos={column}
                                              cart={cart}
                                              addToCart={addToCart}
                                              removeFromCart={removeFromCart}
                                              openModal={openModal}
                                            />
              )}
            </ul>
        }
        <Loader isLoading={isLoading} forwardedRef={loader}/>
      </div>
    </main>
  );
};

export default Gallery;