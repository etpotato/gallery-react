import Navbar from '../Navbar/Navbar';
import GalleryItem from '../GalleryItem/GalleryItem';
import './gallery.scss';

const Gallery = ({ photos, openModal, tags, setTag }) => {
  return (
    <main className='gallery'>
      <h1 className='h2 font-weight-light text-center mb-3'>Browse photos and pick your favorite!</h1>
      <Navbar tags={tags} setTag={setTag}/>
      <ul className='gallery__list row pb-5'>
        {photos.map(photo => <GalleryItem photo={photo} key={photo.id} openModal={openModal}/>)}
      </ul>
    </main>
  );
};

export default Gallery;