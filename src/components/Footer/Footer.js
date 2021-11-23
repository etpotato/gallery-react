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
            href="https://www.pexels.com"
            target="_blank"
            rel="noreferrer"
          >
            Photos provided by Pexels
          </a>
          <p className="footer__copy d-sm-block col">copyleft 2021</p>
          <a className="footer__link col-sm-auto"
            href="mailto:mareev.pv@gmail.com"
          >
            mareev.pv@gmail.com
          </a>
        </div>
      </div>
    </footer>
  )
};
