import './cart.scss';
import CartItem from '../CartItem/CartItem';
import downloadZip from '../../utils/download';

const Cart = ({ cart, setCart, openModal, handleRemoveFromCart }) => {
  const handleDownloadAll = (evt) => {
    evt.preventDefault();
    if (!cart.length) return evt.target.blur(); 
    downloadZip(cart);
  };

  const handleDownloadSelected = (evt) => {
    evt.preventDefault();
    const selected = cart.filter(item => item.checked);
    if (!selected.length) return evt.target.blur(); 
    downloadZip(selected);
  }

  const handleRemoveAll = (evt) => {
    evt.preventDefault();
    setCart([]);
    evt.target.blur();
  }

  const handleRemoveSelected = (evt) => {
    evt.preventDefault();
    setCart(state => state.filter(item => !item.checked));
    evt.target.blur();
  }

  const handleCartItemCheck = (photo) => {
    setCart(state => {
      return state.map(item => {
        if (item.id === photo.id) {
          return {
            ...item,
            checked: !item.checked,
          }
        }
        return item;
      });
    });
  };

  return (
    <main className='cart pt-4 pb-5'>
      <ul className='cart__list mb-4 pb-4'>
        {
          cart.map(photo => <CartItem photo={photo} key={photo.id} handleCartItemCheck={handleCartItemCheck} openModal={openModal} handleRemoveFromCart={handleRemoveFromCart}/>)
        }
      </ul>
      {
        cart.length > 0 &&
        <ul className='cart__controls'>
          <li className='cart__controls-item'>
            <button className='cart__button cart__button--download-all btn btn-success' onClick={handleDownloadAll} type='button'>Download all</button>
          </li>
          <li className='cart__controls-item'>
            <button className='cart__button cart__button--check btn btn-success' onClick={handleDownloadSelected} type='button'>Download selected</button>
          </li>
          <li className='cart__controls-item'>
            <button className='cart__button cart__button--remove-all btn btn-danger' onClick={handleRemoveAll} type='button'>Remove all</button>
          </li>
          <li className='cart__controls-item'>
            <button className='cart__button cart__button--check btn btn-danger' onClick={handleRemoveSelected} type='button'>Remove selected</button>
          </li>
        </ul>
      }
    </main>
  );
};

export default Cart;