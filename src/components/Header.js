import "./Header.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const userIcon = <FontAwesomeIcon icon={faUserCircle} />;
  return (
    <header className="header">
      <h1 className="hidden">be my bookmark</h1>
      <h2 className="header__logo">bm</h2>
      <nav className="header__menu">{userIcon}</nav>
    </header>
  );
};

export default Header;
