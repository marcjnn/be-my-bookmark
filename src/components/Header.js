import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <h1 className="hidden">be my bookmark</h1>
      <h2 className="header__logo">bm</h2>
      <nav className="header__menu">
        <i className="fas fa-user-circle"></i>
      </nav>
    </header>
  );
};

export default Header;
