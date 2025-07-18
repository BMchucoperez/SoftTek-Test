import './Footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <img src="/logoRimacDark.svg" alt="Logo RIMAC Oscuro" className="footer__logo" />
       <div className="footer__divider" />
      <p className="footer__text">© 2025 RIMAC Seguros y Reaseguros.</p>
    </footer>
  );
}