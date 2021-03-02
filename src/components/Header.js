import "./Header.scss";

const Header = (props) => {
  return (
    <header className="header">
      <h1 className="hidden">be my bookmark</h1>
      <h2 className="header__logo">bm</h2>
      <nav className="header__menu">{props.icon}</nav>
    </header>
  );
};

export default Header;
