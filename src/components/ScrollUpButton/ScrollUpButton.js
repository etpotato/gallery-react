import './scrollup.scss';

export default function ScrollUpButton() {
  const handleClick = (evt) => {
    evt.preventDefault();
    evt.target.blur();
    window.scrollTo({
      top: 0, 
      behavior: 'smooth',
    });
  };

  return (
    <button className='scrollup' onClick={handleClick} type='button'>
      <span className='visually-hidden'>Go to start</span>
      <span className='scrollup__arrow'></span>
    </button>
  );
};