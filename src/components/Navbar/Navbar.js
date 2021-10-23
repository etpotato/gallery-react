import './navbar.scss';

const Navbar = ({ tags, searchValue, setSearchValue }) => {
  const handleLinkClick = (tag) => {
    return (evt) => {
      evt.preventDefault();
      evt.target.blur();
      setSearchValue(tag);
    }
  };
  return (
    <div className='gallery__navbar navbar mb-3'>
      <ul className='navbar__list'>
        { tags.map((tag, index) => {
          
            const isCurrent = tag.toLowerCase() === searchValue.trim().toLowerCase();
            return (
            <li className='navbar__item' key={index}>
              <a onClick={handleLinkClick(tag)} className={'btn navbar__link' + (isCurrent ? ' btn-success' : ' btn-outline-success')} href='/'>{tag}</a>
            </li>
            )
          })
        }
      </ul>
    </div>  
  );
};

export default Navbar;