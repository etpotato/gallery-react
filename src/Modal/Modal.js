import { useEffect } from 'react';
import './modal.scss';

const Modal = ({ modalShow, modalPhoto, modalClose }) => {
  const handleCloseClick = (evt) => {
    evt.preventDefault();
    modalClose();
  };

  const handleEsc = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      modalClose();
    }
  };
  
  useEffect(() => {
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);


  return (
    <div className={'modal fade' + (modalShow ? ' show' : '')} role="dialog" aria-hidden="true">
      <div className='modal__underlay' onClick={() => modalClose()}></div>
      <div className="modal__container container modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header modal__header">
            <h5 className="modal-title">Photographer: {modalPhoto.photographer}</h5>
            <button onClick={handleCloseClick} className="modal__close btn" type="button" aria-label="Close"></button>
          </div>
          <div className="modal-body modal__body">
            <div className="modal__image-wrap">
              <img className="modal__image rounded" src={modalPhoto.src ? modalPhoto.src.landscape : ''} alt="Photos provided by Pexels"/>
            </div>
          </div>
          <div className="modal-footer modal__footer">
            <button onClick={handleCloseClick} className="btn btn-secondary" type="button">Close</button>
            <button type="button" className="btn btn-primary">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Modal;