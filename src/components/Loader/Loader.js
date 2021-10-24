import loader from './loader.svg';
import './loader.scss';

export default function Loader ({ isLoading, forwardedRef }) {
  const visibleClass = isLoading ? ' loader--visible' : '';
  
  return ( 
    <div className={`loader pt-2 pb-2${visibleClass}`}>
      <img className='loader__image' ref={forwardedRef} src={ loader } alt='loading'/>
    </div>
  );
};
