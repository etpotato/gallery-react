import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useScrollDirection from '../../hooks/useScrollDirection';
import ScrollUpButton from '../ScrollUpButton/ScrollUpButton';

import './footer.scss';

const ACTIVE_CLASS = 'show';

export default function Footer () {
  const [modif, setModif] = useState(ACTIVE_CLASS);
  const location = useLocation();

  const onScrollDown = () => {
    setModif(ACTIVE_CLASS);
  };

  const onScrollUp = () => {
    setModif('');
  };

  useScrollDirection( onScrollDown, onScrollUp );

  useEffect(() => {
    setModif(ACTIVE_CLASS);
  }, [location]);

  return (
    <footer className={`footer pt-2 pb-2 font-weight-light ${modif}`}>
      <div className="container">
        <ScrollUpButton />
        <div className="row justify-content-between">
          <a className="footer__link col-sm-auto"
            href="https://unsplash.com/"
            target="_blank"
            rel="noreferrer"
          >
            Photos provided by Unsplash
          </a>
          <p className="footer__copy d-sm-block col">copyleft 2023</p>
          <a className="footer__link col-sm-auto"
            href="https://etpotato.com/"
            target="_blank"
            rel="noreferrer"
          >
            etpotato.com
          </a>
        </div>
      </div>
    </footer>
  )
};
