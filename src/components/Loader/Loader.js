import loader from './loader.svg';
import './loader.scss';

export default function Loader ({ isLoading }) {
  return (
    isLoading 
    && <div className='loader container pt-2 pb-2'>
        <img className='loader__image' src={ loader } alt='loading'/>
      </div>
  );
};
