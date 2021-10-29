import './cartItem.scss';

const CartItem = ({ photo, handleCartItemCheck, openModal, handleRemoveFromCart }) => {
  return (
    <div className='cart__item cart-item'>
      <div className='cart-item__image-wrap'>
        <img onClick={() => openModal(photo)} className='cart-item__image' src={ photo.src.large } alt='Photos provided by Pexels'/>
      </div>
      <div className="cart-item__text-wrap">
        <ul className="cart-item__text">
          <li className="cart-item__text-item cart-item__photographer">
            Photographer: <a className="cart-item__link" href={photo.photographer_url} target='_blank' rel='noreferrer'>{ photo.photographer }</a>
          </li>
          <li className="cart-item__text-item cart-item__avg-color">
            Average color: <span className='cart-item__avg-color-tip' style={{ backgroundColor: photo.avg_color }}></span> { photo.avg_color }
          </li>
        </ul>
        <button className="btn btn-outline-danger" onClick={() => handleRemoveFromCart(photo.id)} type="button">Remove</button>
      </div>
      <label className="cart-item__checkbox">
        <input className="cart-item__checkbox-input visually-hidden" checked={photo.checked} onChange={() => handleCartItemCheck(photo)} type="checkbox"/>
        <span className="cart-item__checkbox-check"></span>
        <span className="visually-hidden">Choose this photo</span>
      </label>
    </div>
  );
};

export default CartItem;