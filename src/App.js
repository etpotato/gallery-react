import Header from './Header/Header';
import Gallery from './Gallery/Gallery';
import Modal from './Modal/Modal';
import { useState, useEffect } from 'react';

// const images = [
//   {
//     id: 1,
//     src: 'https://via.placeholder.com/150/fff.png',
//   },
//   {
//     id: 2,
//     src: 'https://via.placeholder.com/150/fff.png',
//   },
//   {
//     id: 3,
//     src: 'https://via.placeholder.com/150/fff.png',
//   },
//   {
//     id: 4,
//     src: 'https://via.placeholder.com/150/fff.png',
//   },
//   {
//     id: 5,
//     src: 'https://via.placeholder.com/150/fff.png',
//   },
//   {
//     id: 6,
//     src: 'https://via.placeholder.com/150/fff.png',
//   },
// ];

const API_KEY = '563492ad6f91700001000001647246300ed247b7b6748ac61d528807';
const GET_URL = 'https://api.pexels.com/v1/curated?page=1&per_page=12';
const SERCH_URL = {
  start: 'https://api.pexels.com/v1/search?query=',
  end: '&page=1&per_page=12',
}

const fetchPhotos = async (URL) => {
  try {
    const response = await fetch(URL, {
      headers: {
       'Authorization': API_KEY,
      },
      method: 'GET',
    });
    if (!response.ok) return console.log('fetch response error');

    const data = await response.json();
    return data.photos;
  }
  catch (error) {
    console.log(error);
  }
};

const TAG_NAMES = [
  'Nature',
  'People',
  'Ocean',
  'Autumn',
  'Sports',
  'Animals',
  'Architecture',
  'Indoor Plants',
  'Health',
  'Books',
  'Music',
  'Design',
  'Art',
  'Economics',
];

const App = () => {
  const [cart, setCart] = useState([]);
  const [tags, setTags] = useState({ names: TAG_NAMES, currentIndex: -1 });
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
      const photos = await fetchPhotos(SERCH_URL.start + name + SERCH_URL.end);
      setPhotos(photos);
      setTags(state => ({ ...state, currentIndex: state.names.findIndex(stateName => stateName === name)}));
    }
    setFilteredPhotos();
  };

  const openModal = (id) => {
    setModal({show: true, photo: photos.find(photo => photo.id === id)});
  };

  const closeModal = () => {
    setModal({show: false, photo: {}});
  };

  useEffect(() => {
    const getPhotos = async () => setPhotos(await fetchPhotos(GET_URL));
    getPhotos();
  },[]);

  return (
    <>
      <Header cartCount={cart.length} setFilter={setFilter}/>
      <div className='container'>
        <Gallery photos={photos} addToCart={addToCart} removeFromCart={removeFromCart} cart={cart} openModal={openModal} tags={tags} setTag={setFilter}/>
      </div>
      <Modal modalShow={modal.show} modalPhoto={modal.photo} modalClose={closeModal} addToCart={addToCart} removeFromCart={removeFromCart} cart={cart}/>
    </>
  );
}

export default App;
