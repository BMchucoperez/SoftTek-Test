import './Header.scss';

export default function Header() {
  return (
    <header className="header">
      <img
        src="/LogoRimac.svg"
        alt="Logo RIMAC"
        className="header__logo"
      />

      <div className="header__contact">
        <span className="header__text">¡Compra por este medio!</span>
        <span className="header__phone">
          <img src="/Phone.svg" alt="Teléfono" className="header__icon" />
          <strong>(01) 411 6001</strong>
        </span>
      </div>
    </header>
  );
}
