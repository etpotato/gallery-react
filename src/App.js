import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import useFetchPhotos from './hooks/useFetchPhotos';
import useLocalStorage from './hooks/useLocalStorage';

import Header from './components/Header/Header';
import Gallery from './components/Gallery/Gallery';
import Modal from './components/Modal/Modal';
import Error from './components/Error/Error';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';

// TODO: logo
// TODO: scrollup button
// TODO: infinite scroll in gallery testing
// TODO: redirect to index after download all

const App = () => {
  const [cart, setCart] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [searchPage, setSearchPage] = useState(1);
  const [modal, setModal] = useState({show: false, photo: {}});
  const { isLoading, photos, hasNextPage, error, setError } = useFetchPhotos(searchValue, searchPage, setSearchPage);
  useLocalStorage(cart, setCart);

  const addToCart = (photo) => {
    setCart(state => [ ...state, { ...photo, checked: false }]);
  };

  const removeFromCart = (id) => {
    setCart(state => state.filter(cartPhoto => cartPhoto.id !== id));
  };

  const openModal = (photo) => {
    setModal({show: true, photo: photo});
  };

  const closeModal = () => {
    setModal({show: false, photo: {}});
  };

  return (
    <Router>
      <Header cartCount={cart.length} searchValue={searchValue} setSearchValue={setSearchValue}/>
      <Switch>
        <Route path='/' exact>
          <Gallery photos={photos} addToCart={addToCart} removeFromCart={removeFromCart} cart={cart} openModal={openModal} searchValue={searchValue} setSearchValue={setSearchValue} isLoading={isLoading} hasNextPage={hasNextPage} setSearchPage={setSearchPage}/>
        </Route>
        <Route path='/cart'>
          <Cart cart={cart} setCart={setCart} openModal={openModal} handleRemoveFromCart={removeFromCart}/>
        </Route>
      </Switch>
      <Footer/>
      { modal.show && <Modal modalPhoto={modal.photo} modalClose={closeModal} addToCart={addToCart} removeFromCart={removeFromCart} cart={cart}/> }
      { error && <Error setError={setError} /> }
    </Router>
  );
}

export default App;
