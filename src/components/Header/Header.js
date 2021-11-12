import { useEffect, useState} from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import useScrollDirection from '../../hooks/useScrollDirection';
import usePathToScrollUp from '../../hooks/usePathToScrollUp';

import ScrollUpButton from '../ScrollUpButton/ScrollUpButton';

import logo from './logo.svg';
import './header.scss';

const BADGE_SCALE_TIME = 100;
const HIDE_HEADER_CLASS = ' header--hide';

const Header = ({ cartCount, searchValue, setSearchValue }) => {
  const [activeCart, setActiveCart] = useState(false);
  const [modif, setModif] = useState('');
  const [showScrollUp, setShowScrollUp] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const isMainPage = useRouteMatch({ path: '/', exact: true });
  usePathToScrollUp();

  const onScrollDown = (scrollY) => {
    setModif(HIDE_HEADER_CLASS);
    if (scrollY > 400) setShowScrollUp(true);
  };

  const onScrollUp = (scrollY) => {
    setModif('');
    if (scrollY < 400) setShowScrollUp(false); 
  };

  useScrollDirection(onScrollDown, onScrollUp);

  const handleChange = (evt) => {
    setInputValue(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setSearchValue(inputValue);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (cartCount > 0) setActiveCart(true);
    setTimeout(() => setActiveCart(false), BADGE_SCALE_TIME);
  }, [cartCount]);

  useEffect(() => setInputValue(searchValue), [searchValue]);

  return (
    <header className={'header pt-3 pb-3' + modif}>
      <div className="container header__container">
        <div className="header__wrap row">
          <Link to='/' className='header__logo-wrap col-sm-auto' aria-label='To main page'>
            <img className='header__logo' src={logo} alt='logo' />
          </Link>
          { isMainPage 
            ? <form onSubmit={handleSubmit} className='d-flex col header__text'>
                <input value={inputValue} onChange={handleChange} className='form-control me-2' type='search' placeholder='Search' aria-label='Search'></input>
                <button className='btn btn-outline-success' type='submit'>Search</button>
              </form>
            : <p className='col header__text lead text-center mb-0'>
                { cartCount > 0 ? 'Your selected photos' : 'Your cart is empty' }
              </p>
          }
          <div className='header__cart-wrap col-sm-auto'>
            <Link to='/cart' className='header__cart position-relative'aria-label='Your shopping cart'>
              {<span className={'header__badge badge bg-primary' + (cartCount > 0 ? ' header__badge--show' : '') + ( activeCart ? ' header__badge--active' : '')}>{ cartCount > 0 && cartCount}</span>}
            </Link>
          </div>
        </div>
        { showScrollUp && <ScrollUpButton /> }
      </div>
    </header>
  );
};

export default Header;