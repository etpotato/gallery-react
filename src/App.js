import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import useFetchPhotos from './hooks/useFetchPhotos';
import useLocalStorage from './hooks/useLocalStorage';

import Header from './components/Header/Header';
import Gallery from './components/Gallery/Gallery';
import Modal from './components/Modal/Modal';
import Cart from './components/Cart/Cart';

// TODO: preloaders
// TODO: infinite scroll in gallery

const App = () => {
  const [cart, setCart] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [searchPage, setSearchPage] = useState(1);
  const [photos, setPhotos] = useState([]);
  const [modal, setModal] = useState({show: false, photo: {}});
  
  useLocalStorage(cart, setCart);
  useFetchPhotos(searchValue, searchPage, setPhotos);

  const addToCart = (photo) => {
    setCart(state => [ ...state, { ...photo, checked: false }]);
  };

  const removeFromCart = (id) => {
    setCart(state => state.filter(cartPhoto => cartPhoto.id !== id));
  };

  const openModal = (id) => {
    setModal({show: true, photo: photos.find(photo => photo.id === id)});
  };

  const closeModal = () => {
    setModal({show: false, photo: {}});
  };

  return (
    <Router>
      <Header cartCount={cart.length} searchValue={searchValue} setSearchValue={setSearchValue}/>
      <Switch>
        <Route path='/' exact>
          <Gallery photos={photos} addToCart={addToCart} removeFromCart={removeFromCart} cart={cart} openModal={openModal} searchValue={searchValue} setSearchValue={setSearchValue}/>
        </Route>
        <Route path='/cart'>
          <Cart cart={cart} setCart={setCart} openModal={openModal} handleRemoveFromCart={removeFromCart}/>
        </Route>
      </Switch>
      { modal.show && <Modal modalPhoto={modal.photo} modalClose={closeModal} addToCart={addToCart} removeFromCart={removeFromCart} cart={cart}/> }
    </Router>
  );
}

export default App;
