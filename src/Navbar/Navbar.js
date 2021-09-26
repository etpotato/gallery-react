import './navbar.scss';

const Navbar = ({ tags, setTag }) => {
  const handleLinkClick = (name) => {
    return (evt) => {
      evt.preventDefault();
      evt.target.blur();
      setTag(name);
    }
  };

  return (
    <div className='gallery__navbar navbar mb-3'>
      <ul className='navbar__list'>
        { tags.names.map((tag, index) => {
            const isCurrent = index === tags.currentIndex;
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