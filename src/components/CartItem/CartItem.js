import { useState } from 'react';
import './cartItem.scss';

const ANIMATION_DURATION = 300;
const HIDE_CLASS = 'hide';

export default function CartItem ({ photo, handleCartItemCheck, openModal, handleRemoveFromCart }) {
  const [modif, setModif] = useState()
  const handleRemove = (evt) => {
    evt.preventDefault();
    setModif(HIDE_CLASS);
    setTimeout(() => handleRemoveFromCart(photo.id), ANIMATION_DURATION
    );
  };

  return (
    <div className={`gallery-grid__item gallery-grid__item--cart cart-item ${modif}`}>
      <div className='cart-item__image-wrap'>
        <img onClick={() => openModal(photo)} className='cart-item__image' src={ photo.src.large } alt='Photos provided by Pexels'/>
        <button className="cart-item__button btn btn-outline-danger" onClick={handleRemove} type="button">Remove</button>
      </div>
      <p className="cart-item__text cart-item__photographer">
        Photographer: <a className="cart-item__link" href={photo.photographer_url} target='_blank' rel='noreferrer'>{ photo.photographer }</a>
      </p>
      <label className="cart-item__checkbox">
        <input className="cart-item__checkbox-input visually-hidden" checked={photo.checked} onChange={() => handleCartItemCheck(photo)} type="checkbox"/>
        <span className="cart-item__checkbox-check"></span>
        <span className="visually-hidden">Choose this photo</span>
      </label>
    </div>
  );
}
