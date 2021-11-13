import { useState } from 'react';
import useScrollDirection from '../../hooks/useScrollDirection';
import APP from '../../config';

import './scrollup.scss';

const ACTIVE_CLASS = 'show';
const ANIMATION_DURATION = 200;

export default function ScrollUpButton() {
  const [show, setShow] = useState(false);
  const [modif, setModif] = useState('');

  const handleClick = (evt) => {
    evt.preventDefault();
    evt.target.blur();
    window.scrollTo({
      top: 0, 
      behavior: 'smooth',
    });
  };

  const onScrollDown = (scrollY) => {
    if (scrollY > APP.SCROLL_Y_BOUND) {
      setShow(true);
      requestAnimationFrame(() => setModif(ACTIVE_CLASS));
    }
  };

  const onScrollUp = (scrollY) => {
    if (scrollY < APP.SCROLL_Y_BOUND) {
      setModif('');
      setTimeout(() => setShow(false), ANIMATION_DURATION);
    }
  };

  useScrollDirection( onScrollDown, onScrollUp );

  return (
    show && <button className={`scrollup ${modif}`} onClick={handleClick} type='button'>
              <span className='visually-hidden'>Go to start</span>
              <span className='scrollup__arrow'></span>
            </button>
  );
};