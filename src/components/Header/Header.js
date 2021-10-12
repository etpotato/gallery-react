import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from './logo.svg';
import './header.scss';

const BADGE_SCALE_TIME = 100;

const Header = ({ cartCount, setFilter, searchValue, setSearchValue }) => {
  const [activeCart, setActiveCart] = useState(false);

  const isMainPage = useLocation().pathname === '/';

  const handleSearchSubmit = (evt) => {
    evt.preventDefault();
    setFilter(searchValue);
  };

  const handleSearchInput = (evt) => {
    setSearchValue(evt.target.value);
  };

  useEffect(() => {
    if (cartCount > 0) setActiveCart(true);
    setTimeout(() => setActiveCart(false), BADGE_SCALE_TIME);
  }, [cartCount]);

  return (
    <header className='header pt-3 pb-3'>
      <div className="container">
        <div className="header__wrap row">
          <Link to='/' className='header__logo-wrap col-sm-auto' aria-label='To main page'>
            <img className='header__logo rounded' src={logo} alt='logo' />
          </Link>
          { isMainPage 
            ? <form onSubmit={handleSearchSubmit} className='d-flex col header__form'>
                <input onInput={handleSearchInput} value={searchValue} className='form-control me-2' type='search' placeholder='Search' aria-label='Search'></input>
                <button className='btn btn-outline-success' type='submit'>Search</button>
              </form>
            : <p className='col lead text-center mb-0'>{ cartCount > 0 ? 'Your selected photos' : 'Your cart is empty' }</p>
          }
          <div className='header__cart-wrap col-sm-auto'>
            <Link to='/cart' className='header__cart position-relative'aria-label='Your shopping cart'>
              <span className={'header__badge badge bg-primary' + (cartCount > 0 ? ' header__badge--show' : '') + ( activeCart ? ' header__badge--active' : '')}>{ cartCount > 0 ? cartCount : ''}</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;