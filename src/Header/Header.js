import logo from './logo.svg';
import './header.scss';

const Header = () => (
  <header className='header row pt-4 pb-4'>
    <a className='header__logo-wrap col-sm-auto' href='/' aria-label='To main page'>
      <img className='header__logo rounded' src={logo} alt='logo' />
    </a>
    <form className='d-flex col header__form'>
      <input className='form-control me-2' type='search' placeholder='Search' aria-label='Search'></input>
      <button className='btn btn-outline-success' type='submit'>Search</button>
    </form>
    <div className='header__cart-wrap col-sm-auto'>
      <a className='header__cart position-relative' href='/' aria-label='Your shopping cart'>
        <span className='header__badge badge bg-primary'>2</span>
      </a>
    </div>
  </header>
);

export default Header;