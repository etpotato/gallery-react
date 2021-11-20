import { useState, useRef } from 'react';
import useScrollDirection from '../../hooks/useScrollDirection';
import APP from '../../config';
import ScrollUpButton from '../ScrollUpButton/ScrollUpButton';

import './footer.scss';

const ACTIVE_CLASS = 'show';

export default function Footer () {
  const [modif, setModif] = useState('');
  const heightRef = useRef(window.innerHeight);

  const onScrollDown = scrollY => {
    if (scrollY > heightRef.current * 2 + APP.SCROLL_Y_BOUND) {
      setModif(ACTIVE_CLASS);
    }
  };

  const onScrollUp = () => {
    setModif('');
  };

  useScrollDirection( onScrollDown, onScrollUp );

  return (
    <footer className={`footer pt-2 pb-2 font-weight-light ${modif}`}>
      <div className="container">
        <ScrollUpButton />
        <div className="row justify-content-between">
          <a className="footer__link col-sm-auto p-1"
            href="https://www.pexels.com"
            target="_blank"
            rel="noreferrer"
          >
            Photos provided by Pexels
          </a>
          <p className="footer__copy d-sm-block col p-1">copyleft 2021</p>
          <a className="footer__link col-sm-auto p-1"
            href="mailto:mareev.pv@gmail.com"
          >
            mareev.pv@gmail.com
          </a>
        </div>
      </div>
    </footer>
  )
};
