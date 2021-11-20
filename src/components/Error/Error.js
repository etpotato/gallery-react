import './error.scss';

export default function Error ({ setError }) {

  const handleCloseClick = evt => {
    evt.preventDefault();
    setError(false);
  };

  return (
    <div
      className="modal modal--error fade show"
      role="dialog"
      aria-hidden="true">
      <div
        className="modal__underlay"
        onClick={handleCloseClick}
      ></div>
      <div
        className="modal__container container modal-dialog-centered"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-body modal__body">
            <h5 className="modal-title warning modal__title">
              Something went wrong. Please, refresh the page.
            </h5>
          </div>
          <div className="modal-footer modal__footer">
            <button
              onClick={handleCloseClick}
              className="btn btn-outline-secondary"
              type="button"
            >OK</button>
          </div>
        </div>
      </div>
    </div>
  );
};
