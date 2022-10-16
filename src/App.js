import { useState, useEffect, useCallback } from 'react';
import { Switch, Route, useLocation, useParams, useHistory } from 'react-router-dom';
import useFetchPhotos from './hooks/useFetchPhotos';
import useLocalStorage from './hooks/useLocalStorage';

import Header from './components/Header/Header';
import Gallery from './components/Gallery/Gallery';
import Cart from './components/Cart/Cart';
import Modal from './components/Modal/Modal';
import Error from './components/Error/Error';
import Footer from './components/Footer/Footer';
import useSearchParam from './hooks/useSearchParam';
import useSetSearchParam from './hooks/useSetSearchParam';

const App = () => {
  const [cart, setCart] = useState([]);
  const [modal, setModal] = useState({show: false, photo: {}});
  const [page, setPage] = useState(1);
  const searchValue = useSearchParam('query', '');
  const setQuery = useSetSearchParam('query');
  const searchPage = useSearchParam('page', '1');
  const setSearchPage = useSetSearchParam('page');

  useEffect(() => {
    // read url query params here
    console.log(searchValue);
  }, [searchValue]);

  const setSearchPageQ = useCallback(() => {
    try {
      const newValue = parseInt(searchPage);
      setSearchPage(newValue + 1);
    } catch(err) {
      console.log(err);
    }
  }, [searchPage, setSearchPage]);


  const { isLoading, photos, hasNextPage, error, setError } = useFetchPhotos(searchValue, page, setPage);
  useLocalStorage(cart, setCart);

  const setSearchValue = (value) => setQuery(value);

  const addToCart = photo => {
    setCart(state => [ ...state, { ...photo, checked: false }]);
  };

  const removeFromCart = id => {
    setCart(state => state.filter(cartPhoto => cartPhoto.id !== id));
  };

  const openModal = photo => {
    setModal({show: true, photo: photo});
  };

  const closeModal = () => {
    setModal({show: false, photo: {}});
  };

  return (
    <>
      <Header
        cartCount={cart.length}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <button style={{display: 'block', paddingTop: '100px'}} onClick={() => {}}>set search</button>
      <Switch>
        <Route path={['/', '/search']} exact>
          <Gallery
            photos={photos}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            cart={cart}
            openModal={openModal}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            isLoading={isLoading}
            hasNextPage={hasNextPage}
            setSearchPage={setPage}
          />
        </Route>
        <Route path="/cart">
          <Cart
            cart={cart}
            setCart={setCart}
            openModal={openModal}
            handleRemoveFromCart={removeFromCart}
          />
        </Route>
      </Switch>
      <Footer/>
      { modal.show
        && <Modal
              modalPhoto={modal.photo}
              modalClose={closeModal}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              cart={cart}
            /> }
      { error && <Error setError={setError} /> }
    </>
  );
}

export default App;
