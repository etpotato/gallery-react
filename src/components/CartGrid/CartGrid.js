import StackGrid from 'react-stack-grid';

import CartItem from '../CartItem/CartItem';

const BREAKPOINTS = {
  mobile: 520,
  tablet: 768,
};

export default function CartGrid({cart, handleCartItemCheck, handleRemoveFromCart, openModal}) {
  const windowWidth = window.innerWidth;
  const getWidth = () => {
    if (windowWidth > BREAKPOINTS.tablet) return '33.33%';
    if (windowWidth > BREAKPOINTS.mobile) return '50%';
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
