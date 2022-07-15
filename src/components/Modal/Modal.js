import { useState, useEffect } from 'react';
import './modal.scss';

const ANIMATION_TIME = 300;

export default function Modal ({ modalPhoto, modalClose, addToCart, removeFromCart, cart }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const isInCart = cart.some(cartPhoto => cartPhoto.id === modalPhoto.id);

  const handleCloseClick = evt => {
    evt.preventDefault();
    setImageLoaded(false);
    setTimeout(() => modalClose(), ANIMATION_TIME);
  };

  const handleAddToCart = evt => {
    evt.preventDefault();
    addToCart(modalPhoto);
    evt.target.blur();
  };

  const handleRemoveFromCart = evt => {
    evt.preventDefault();
    removeFromCart(modalPhoto.id);
    evt.target.blur();
  };

  useEffect(() => {
    const handleEsc = evt => {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        setImageLoaded(false);
        setTimeout(() => modalClose(), ANIMATION_TIME);
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [modalClose]);

  return (
    <div
      className={'modal fade' + ((imageLoaded) ? ' show' : '')}
      role="dialog"
      aria-hidden="true"
    >
      <div
        className="modal__underlay"
        onClick={handleCloseClick}
      ></div>
      <div
        className="modal__container container modal-dialog-centered"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header modal__header">
            <h5 className="modal-title h6 modal__title">
              Author:&ensp;
              <a
                className="modal__link"
                href={modalPhoto.user.links.html}
                target="_blank"
                rel="noreferrer"
              >{modalPhoto.user.name}</a>
            </h5>
            <button
              onClick={handleCloseClick}
              className="modal__close btn"
              type="button"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body modal__body">
            <div className="modal__image-wrap">
              <img
                onLoad={() => setImageLoaded(true)}
                className="modal__image"
                src={modalPhoto?.urls.full}
                alt="Photos provided by Pexels"
              />
            </div>
          </div>
          <div className="modal-footer modal__footer">
            <button
              onClick={handleCloseClick}
              className="btn btn-secondary"
              type="button"
            >Close</button>
            { isInCart
              ? <button
                  onClick={handleRemoveFromCart}
                  className="modal__addtocart btn btn-danger"
                  type="button"
                >Remove</button>
              : <button
                  onClick={handleAddToCart}
                  className="modal__addtocart btn btn-primary"
                  type="button"
                >Add to cart</button>
            }
          </div>
        </div>
      </div>
    </div>
  )
};
