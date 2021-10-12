import { useState } from 'react';

import './cart.scss';
import CartItem from '../CartItem/CartItem';
import downloadZip from '../../helpers/download';

const Cart = ({ cart, setCart, openModal, handleRemoveFromCart }) => {
  const [selected, setSelected] = useState([]);

  const handleDownloadAll = (evt) => {
    evt.preventDefault();
    downloadZip(cart);
  };

  const handleRemoveAll = (evt) => {
    evt.preventDefault();
    setCart([]);
    // evt.target.blur();
  }

  return (
    <main className='cart pt-4 pb-5'>
      <h1 className='lead text-center mb-4 mb-lg-5'>Your selected photos</h1>
      <ul className='cart__list mb-4 pb-4'>
        {cart.map(photo => {
          return <CartItem photo={photo} key={photo.id} selected={selected} setSelected={setSelected} openModal={openModal} handleRemoveFromCart={handleRemoveFromCart}/>;
        })}
      </ul>
      <ul className='cart__controls'>
        <li className='cart__controls-item'>
          <button className='cart__button btn btn-danger' onClick={handleRemoveAll} type='button'>Remove selected</button>
        </li>
        <li className='cart__controls-item'>
          <button className='cart__button btn btn-danger' onClick={handleRemoveAll} type='button'>Remove all</button>
        </li>
        <li className='cart__controls-item'>
          <button className='cart__button btn btn-success' onClick={handleDownloadAll} type='button'>Download selected</button>
        </li>
        <li className='cart__controls-item'>
          <button className='cart__button btn btn-success' onClick={handleDownloadAll} type='button'>Download all</button>
        </li>
      </ul>
    </main>
  );
};

export default Cart;