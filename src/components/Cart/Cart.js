import './cart.scss';
import CartItem from '../CartItem/CartItem';
import downloadZip from '../../helpers/download';

const Cart = ({ cart, openModal, handleRemoveFromCart }) => {
  const handleDownload = (evt) => {
    evt.preventDefault();
    downloadZip(cart);
  };

  return (
    <main className='cart pt-4 pb-5'>
      <h1 className='lead text-center mb-4 mb-lg-5'>Your selected photos</h1>
      <ul className='cart__list mb-4 pb-4'>
        {cart.map(photo => {
          return <CartItem photo={photo} key={photo.id} openModal={openModal} handleRemoveFromCart={handleRemoveFromCart}/>;
        })}
      </ul>
      <ul className="cart__controls">
        <li className="cart__controls-item">
          <button className="cart__button btn btn-success" onClick={handleDownload}>Download all</button>
        </li>
      </ul>
    </main>
  );
};

export default Cart;