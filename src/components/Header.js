import "../style/Header.scss";

const Header = () => {
  return (
    <header class="headMobile">
      <div class="headerWrapper column">
        <h2 class="logo">bm</h2>
        <nav>
          <ul class="navBar">
            <li>
              <i class="fas fa-user-circle"></i>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
