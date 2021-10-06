import './cart.scss';
import CartItem from '../CartItem/CartItem';

const Cart = ({ cart, openModal, handleRemoveFromCart }) => {
  return (
    <main className='cart pt-4 pb-5'>
      <h1 className='lead text-center mb-4 mb-lg-5'>Your selected photos</h1>
      <ul className='cart__list mb-2'>
        {cart.map(photo => {
          return <CartItem photo={photo} key={photo.id} openModal={openModal} handleRemoveFromCart={handleRemoveFromCart}/>;
        })}
      </ul>
    </main>
  );
};

export default Cart;