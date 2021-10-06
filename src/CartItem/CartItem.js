import { useState } from 'react';
import './cartItem.scss';

const CartItem = ({ photo, openModal, handleRemoveFromCart }) => {
  const [checked, setChecked] = useState(false);
  const handleCheckbox = () => {
    setChecked(state => !state);
  };
  return (
    <li className='cart__item cart-item'>
      <div className='cart-item__image-wrap'>
        <img onClick={() => openModal(photo.id)} className='cart-item__image' src={ photo.src.large } alt='Photos provided by Pexels'/>
      </div>
      <div className="cart-item__text-wrap">
        <ul className="cart-item__text">
          <li className="cart-item__text-item cart-item__photographer">Photographer: { photo.photographer }.</li>
          <li className="cart-item__text-item cart-item__avg-color">
            Average color: <span style={{ backgroundColor: photo.avg_color }}></span> { photo.avg_color }
          </li>
        </ul>
        <button className="btn btn-danger" onClick={() => handleRemoveFromCart(photo.id)} type="button">Remove</button>
      </div>
      <label className="cart-item__checkbox">
        <input className="cart-item__checkbox-input visually-hidden" checked={checked} onInput={handleCheckbox} type="checkbox"/>
        <span className="cart-item__checkbox-check"></span>
        <span className="visually-hidden">Choose this photo</span>
      </label>
    </li>
  );
};

export default CartItem;