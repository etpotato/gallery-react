import StackGrid from 'react-stack-grid';
import APP from '../../config';
import CartItem from '../CartItem/CartItem';

export default function CartGrid({cart, handleCartItemCheck, handleRemoveFromCart, openModal}) {
  const windowWidth = window.innerWidth;
  const getWidth = () => {
    if (windowWidth > APP.BREAKPOINTS.tablet) return '33.33%';
    if (windowWidth > APP.BREAKPOINTS.mobile) return '50%';
    return '100%';
  };
  return (
    <div className='cart__list mb-4 pb-4'>
      <StackGrid
        columnWidth={getWidth()}
        gutterWidth={16}
        gutterHeight={16}
        monitorImagesLoaded={true}
      >
        {
          cart.map(photo => <CartItem photo={photo} key={photo.id} handleCartItemCheck={handleCartItemCheck} openModal={openModal} handleRemoveFromCart={handleRemoveFromCart}/>)
        }
      </StackGrid>
    </div>
  );
};
