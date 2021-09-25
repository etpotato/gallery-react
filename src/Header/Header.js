import logo from './logo.svg';
import './header.scss';

const Header = () => (
  <header className="header row pt-3 pb-3">
    <a className="col-sm-auto" href="/" aria-label="To main page">
      <img className="header__logo rounded" src={logo} alt="logo" />
    </a>
    <form class="d-flex col">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
    <a className="header__cart col-sm-auto position-relative" href="#" aria-label="Your shopping cart">
      <span className="header__badge badge bg-primary">2</span>
    </a>
  </header>
);

export default Header;