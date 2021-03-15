// styles & resources
import "./Header.scss";
import icons from "../assets/icons";

// HEADER

const Header = () => {
  return (
    <header className="header">
      <h1 className="hidden">be my bookmark</h1>
      <h2 className="header__logo">bm</h2>
      <nav className="header__menu">{icons.user}</nav>
    </header>
  );
};

export default Header;
