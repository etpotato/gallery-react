import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import fetchPhotos from './helpers/api';

import Header from './components/Header/Header';
import Gallery from './components/Gallery/Gallery';
import Modal from './components/Modal/Modal';
import Cart from './components/Cart/Cart';

const TAG_NAMES = [
  'Nature',
  'People',
  'Ocean',
  'Autumn',
  'Planes',
  'Chill',
  'Sports',
  'Animals',
  'Architecture',
  'Indoor Plants',
  'Health',
  'Coffee break',
  'Books',
  'Food',
  'Music',
  'Design',
  'Art',
  'Finance',
  'Woodwork',
  'Cozy home',
  'Science',
  'Retro',
];

const App = () => {
  const [cart, setCart] = useState([]);
  const [tags, setTags] = useState({ names: TAG_NAMES, currentIndex: -1 });
  const [searchValue, setSearchValue] = useState('');
  const [photos, setPhotos] = useState([]);
  const [modal, setModal] = useState({show: false, photo: {}});

  const addToCart = (photo) => {
    setCart(state => [...state, photo]);
  };

  const removeFromCart = (id) => {
    setCart(state => state.filter(cartPhoto => cartPhoto.id !== id));
  }

  const setFilter = (name) => {
    const setFilteredPhotos = async () => {
      const data = await fetchPhotos(name);
      setPhotos(data.photos);
    }
    setFilteredPhotos();
    setTags(state => ({ 
      ...state,
      currentIndex: state.names.findIndex(stateName => stateName === name),
    }));
    setSearchValue(name);
  };

  const openModal = (id) => {
    setModal({show: true, photo: photos.find(photo => photo.id === id)});
  };

  const closeModal = () => {
    setModal({show: false, photo: {}});
  };

  useEffect(() => {
    const getPhotos = async () => {
      const data = await fetchPhotos();
      setPhotos(data.photos);
    }
    getPhotos();
  },[]);

  return (
    <Router>
      <Header cartCount={cart.length} setFilter={setFilter} searchValue={searchValue} setSearchValue={setSearchValue}/>
      <Switch>
        <Route path='/' exact>
          <div className='container'>
            <Gallery photos={photos} addToCart={addToCart} removeFromCart={removeFromCart} cart={cart} openModal={openModal} tags={tags} setTag={setFilter}/>
          </div>
        </Route>
        <Route path='/cart'>
          <div className='container'>
            <Cart cart={cart} openModal={openModal} handleRemoveFromCart={removeFromCart}/>
          </div>
        </Route>
      </Switch>
      <Modal modalShow={modal.show} modalPhoto={modal.photo} modalClose={closeModal} addToCart={addToCart} removeFromCart={removeFromCart} cart={cart}/>
    </Router>
  );
}

export default App;
