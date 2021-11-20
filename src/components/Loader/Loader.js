import loader from './loader.svg';
import './loader.scss';

export default function Loader ({ isLoading }) {
  const visibleClass = isLoading ? ' loader--visible' : '';
  
  return ( 
    <div className={`loader pt-4 pb-2${visibleClass}`}>
      <img
        className="loader__image"
        src={loader}
        alt="loading"
      />
    </div>
  );
};
