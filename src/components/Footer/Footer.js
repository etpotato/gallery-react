import './footer.scss';

export default function Footer ({footerRef}) {
  return (
    <footer className='footer pt-4 pb-4 font-weight-light' ref={footerRef}>
      <div className='container'>
        <div className="row">
          <a className='footer__link col-sm-auto p-1' href="https://www.pexels.com" target='_blank' rel='noreferrer'>Photos provided by Pexels</a>
          <p className='footer__copy col p-1'>copyleft 2021</p>
          <a className="footer__link col-sm-auto p-1" href="mailto:mareev.pv@gmail.com">mareev.pv@gmail.com</a>
        </div>
      </div>
    </footer>
  )
};
