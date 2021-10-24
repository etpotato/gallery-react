import './footer.scss';

export default function Footer ({footerRef}) {
  return (
    <footer className='footer pt-4 pb-4' ref={footerRef}>
      <div className='container'>
        This is my footer
      </div>
    </footer>
  )
};
